import React, { useEffect, useMemo, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  DateHeader,
  DateText,
  ListMeetup,
  Content,
  Image,
  Info,
  Title,
  Span,
  TextSpan,
  ButtonContent,
  ContainerEmptyList,
  TextEmpty,
} from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

import api from '~/services/api';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);

  async function loadlMeetups() {
    const queryDate = format(date, "yyyy'-'MM'-'dd", { locale: pt });

    const response = await api.get(`meetups/?date=${queryDate}&page=${page}`);

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const data = response.data.map(meetup => {
      const dateNotFormatted = utcToZonedTime(meetup.date, timezone);

      const dateFormatted = format(
        dateNotFormatted,
        "d 'de' MMMM ', às ' H'h'",
        {
          locale: pt,
        }
      );
      return {
        ...meetup,
        dateFormatted,
      };
    });

    setMeetups([...meetups, ...data]);
    setPage(page + 1);
  }

  const ActualDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  async function loadSubscriptions() {
    const response = await api.get('subscription');

    const subscription_id = response.data.map(item => {
      return item.meetup_id;
    });

    await setSubscriptions(subscription_id);
  }

  useEffect(() => {
    loadlMeetups();
    loadSubscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, isFocused]);

  function handleAddDay() {
    setDate(addDays(date, 1));
    setPage(1);
    setMeetups([]);
  }

  function handleSubDay() {
    if (date > new Date()) {
      setDate(subDays(date, 1));
      setPage(1);
      setMeetups([]);
    }
  }

  async function handleInscription(id, past) {
    try {
      if (!past) {
        await api.post(`subscription/${id}`);
        Alert.alert('Sucesso!', 'Inscrição realizada com sucesso!');
        loadSubscriptions();
      }
    } catch (err) {
      Alert.alert('Erro!', 'Erro na inscrição!');
    }
  }

  function emptyList() {
    return (
      <ContainerEmptyList>
        <TextEmpty>A lista não possui Nenhum item para exibir</TextEmpty>
      </ContainerEmptyList>
    );
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateHeader>
          <TouchableOpacity onPress={handleSubDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>

          <DateText>{ActualDate}</DateText>

          <TouchableOpacity onPress={handleAddDay}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </DateHeader>

        <ListMeetup
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReached={loadlMeetups}
          onEndReachedThreshold={0.2}
          ListEmptyComponent={() => emptyList()}
          renderItem={({ item }) => (
            <Content>
              <Image
                source={{
                  uri: item.file
                    ? item.file.url
                    : `https://api.adorable.io/avatar/50/${item.title}.png`,
                }}
              />
              <Info>
                <Title>{item.title}</Title>
                <Span>
                  <Icon name="event" size={15} color="#999" />
                  <TextSpan>{item.dateFormatted}</TextSpan>
                </Span>
                <Span>
                  <Icon name="place" size={15} color="#999" />
                  <TextSpan>{item.localization}</TextSpan>
                </Span>
                <Span>
                  <Icon name="person" size={15} color="#999" />
                  <TextSpan>Organizador: {item.User.name}</TextSpan>
                </Span>
              </Info>

              {subscriptions.indexOf(item.id) >= 0 ? (
                <ButtonContent
                  subscription
                  past={item.past}
                  onPress={() => handleInscription(item.id, item.past)}
                >
                  Inscrito
                </ButtonContent>
              ) : (
                <ButtonContent
                  past={item.past}
                  onPress={() => handleInscription(item.id, item.past)}
                >
                  Realizar inscrição
                </ButtonContent>
              )}
            </Content>
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
  header: {
    Background: '#000',
    height: '24px',
  },
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
