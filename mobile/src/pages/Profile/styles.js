import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  margin: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InputContainer = styled(Input)`
  margin-bottom: 10px;
`;

export const ButtonContainer = styled(Button)`
  margin-top: 5px;
`;

export const ButtonLogoff = styled(Button)`
  margin-top: 15px;
  background: #d44059;
  font-size: 16px;
`;
