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

export const ContainerModal = styled.View`
  flex: 1;
  background: #000;
  opacity: 0.5;
`;

export const ContentModal = styled.View`
  height: 25%;
  width: 80%;
  border-radius: 4px;
  background: #fff;
`;

export const TextModal = styled.Text`
  font-size: 16px;
`;
