import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  Separator,
  InputContainer,
  ButtonContainer,
  ButtonLogoff,
} from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Header />

        <Form>
          <InputContainer
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o nome desejado"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <InputContainer
            keyboardType="email-address"
            placeholder="Seu email"
            onChangeText={setEmail}
            value={email}
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />

          <Separator />

          <InputContainer
            secureTextEntry
            placeholder="Senha atual"
            onChangeText={setOldPassword}
            value={oldPassword}
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <InputContainer
            secureTextEntry
            placeholder="Nova senha"
            onChangeText={setPassword}
            value={password}
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => newPasswordRef.current.focus()}
          />
          <InputContainer
            secureTextEntry
            placeholder="Confirmação sua senha"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            ref={newPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <ButtonContainer onPress={handleSubmit}>
            Salvar perfil
          </ButtonContainer>

          <ButtonLogoff onPress={handleLogout}>Sair do Meetapp</ButtonLogoff>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
