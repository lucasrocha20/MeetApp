import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Modal from 'react-native-modal';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
  Container,
  ListMeetup,
  Content,
  Image,
  Info,
  Title,
  Span,
  ButtonContent,
  ContentModal,
  TextModal,
  ContentButtonModal,
  ButtonModal,
  TextButton,
  ContainerEmptyList,
  TextEmpty,
} from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

import api from '~/services/api';

function Inscription({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState();

  async function loadSubscriptions() {
    try {
      const response = await api.get('subscription');

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(subscription => {
        const date = utcToZonedTime(subscription.Meetup.date, timezone);

        const dateFormatted = format(date, "d 'de' MMMM ', às ' H'h'", {
          locale: pt,
        });

        return {
          ...subscription,
          dateFormatted,
        };
      });

      setSubscriptions(data);
    } catch (err) {
      Alert.alert('Erro!', 'Erro ao carregar as inscrições!');
    }
  }

  async function cancelSubscription() {
    try {
      await api.delete(`subscription/${itemSelected}`);
      loadSubscriptions();

      setModalVisible(false);
      setItemSelected();
      Alert.alert('Sucesso!', 'Inscrição cancelada com sucesso!');
    } catch (err) {
      Alert.alert('Erro!', 'Não foi possível cancelar essa inscrição!');
    }
  }

  function emptyList() {
    return (
      <ContainerEmptyList>
        <TextEmpty>Você não possui inscrições</TextEmpty>
      </ContainerEmptyList>
    );
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  return (
    <Background>
      <Header />
      <Container>
        <ListMeetup
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={() => emptyList()}
          renderItem={({ item }) => (
            <Content>
              <Image
                source={{
                  uri: item.Meetup.file
                    ? item.Meetup.file.url
                    : `https://api.adorable.io/avatar/50/${item.Meetup.title}.png`,
                }}
                alt="banner"
              />
              <Info>
                <Title>{item.Meetup.title}</Title>
                <Span>
                  <Icon name="event" size={15} color="#999" />
                  {item.dateFormatted}
                </Span>
                <Span>
                  <Icon name="place" size={15} color="#999" />
                  {item.Meetup.localization}
                </Span>
                <Span>
                  <Icon name="person" size={15} color="#999" />
                  Organizador: {item.Meetup.User.name}
                </Span>
              </Info>

              {/* cancelSubscription(item.id) */}
              <ButtonContent
                onPress={() => {
                  setItemSelected(item.id);
                  setModalVisible(true);
                }}
              >
                Cancelar Inscrição
              </ButtonContent>
            </Content>
          )}
        />
      </Container>

      <Modal isVisible={modalVisible}>
        <ContentModal>
          <TextModal>Deseja cancelar a inscrição ?</TextModal>
          <ContentButtonModal>
            <ButtonModal cancel onPress={() => setModalVisible(false)}>
              <TextButton>Não</TextButton>
            </ButtonModal>
            <ButtonModal
              title="Sim"
              onPress={() => {
                cancelSubscription();
              }}
            >
              <TextButton>Sim</TextButton>
            </ButtonModal>
          </ContentButtonModal>
        </ContentModal>
      </Modal>
    </Background>
  );
}

Inscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

Inscription.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Inscription);
