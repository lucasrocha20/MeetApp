import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import {
  Container,
  Image,
  Form,
  InputContainer,
  ButtonContainer,
  SignUpLink,
  LinkText,
} from './styles';

import logo from '~/Assets/M.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <InputContainer
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <InputContainer
            secureTextEntry
            placeholder="Sua senha secreta"
            onChangeText={setPassword}
            value={password}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <ButtonContainer loading={loading} onPress={handleSubmit}>
            Entrar
          </ButtonContainer>
        </Form>

        <SignUpLink>
          <LinkText onPress={() => navigation.navigate('SignUp')}>
            Criar conta grátis
          </LinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
