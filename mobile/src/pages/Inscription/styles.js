import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;
export const ListMeetup = styled.FlatList``;

export const Content = styled.View`
  margin: 20px;
  height: 380px;
  background: #fff;
  border-radius: 4px;

  align-items: center;
`;
export const Image = styled.Image`
  height: 150px;
  width: 100%;

  border-radius: 4px;
`;

export const Info = styled.View`
  margin: 20px;

  flex-direction: column;
  align-self: flex-start;
`;

export const Title = styled.Text`
  margin-bottom: 12px;
  font-size: 18px;
  color: #333;
`;
export const Span = styled.Text`
  margin-bottom: 12px;
  color: #999;
  font-size: 13px;
`;
export const ButtonContent = styled(Button)`
  width: 90%;
  font-size: 16px;
  height: 40px;
  margin-bottom: 20px;
`;

export const ContentModal = styled.View`
  align-self: center;
  align-items: center;
  padding: 5px;
  margin: auto 0;
  height: 16%;
  width: 70%;
  border-radius: 4px;
  background: #fff;
`;

export const TextModal = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ContentButtonModal = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonModal = styled.TouchableOpacity`
  background: ${props => (props.cancel ? '#f94d6a' : '#6FCF71')};
  margin-top: 30px;
  width: 45%;
  height: 35px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ContainerEmptyList = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextEmpty = styled.Text`
  color: #fff;
  font-size: 20px;
`;
