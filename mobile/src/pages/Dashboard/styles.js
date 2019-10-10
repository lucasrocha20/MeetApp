import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const DateHeader = styled.View`
  margin: 30px 0 10px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.Text`
  margin: 0 15px;
  font-size: 20px;
  color: #fff;
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
export const Span = styled.View`
  margin-bottom: 12px;
  align-items: center;
  flex-direction: row;
`;

export const TextSpan = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 5px;
`;

export const ButtonContent = styled(Button)`
  width: 90%;
  font-size: 16px;
  height: 40px;
  margin-bottom: 20px;

  opacity: ${props => (props.past || props.subscription ? 0.6 : 1)};
`;
