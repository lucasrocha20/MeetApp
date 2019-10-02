import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import history from '~/services/history';

import { Container } from './styles';
import BannerInput from './BannerInput';
import DataPicker from './DataPicker';

import { updateMeetUpRequest, addMeetUp } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  localization: Yup.string().required('A localização é obrigatória'),
  file_id: Yup.string(),
});

export default function Meetup({ match }) {
  const dispatch = useDispatch();
  const { meetup_id } = match.params;

  const meetup = useSelector(state =>
    state.meetup.meetups.find(m => String(m.id) === meetup_id)
  );

  if (!meetup && !meetup_id) {
    history.push('/dashboard');
    return <Container />;
  }

  function handleSubmit(data) {
    if (meetup) {
      dispatch(updateMeetUpRequest(meetup_id, data));
    } else {
      dispatch(addMeetUp(data));
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          name="description"
          type="text"
          placeholder="Descrição do Meetup"
        />
        <DataPicker name="date" placeholderText="Insira a data do meetup" />
        <Input
          name="localization"
          type="text"
          placeholder="Localização"
          id="description"
        />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetup_id: PropTypes.string,
    }),
  }).isRequired,
};
