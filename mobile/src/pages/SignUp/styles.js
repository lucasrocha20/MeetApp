import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  margin: auto 30px;

  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 41px;
  height: 41px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const InputContainer = styled(Input)`
  margin-bottom: 10px;
`;

export const ButtonContainer = styled(Button)`
  margin-top: 5px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

export const LinkText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
`;
