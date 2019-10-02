import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import history from '~/services/history';

import { Container, Banner } from './styles';

import { destroyMeetUpRequest } from '~/store/modules/meetup/actions';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const { meetup_id } = match.params;
  const meetup = useSelector(state =>
    state.meetup.meetups.find(m => String(m.id) === meetup_id)
  );

  if (!meetup) {
    history.push('/dashboard');
    return <Container />;
  }

  function handleEdit() {
    history.push(`/meetup/${meetup_id}`);
  }

  function handleDelete(id) {
    dispatch(destroyMeetUpRequest(id));
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button
            type="button"
            id="btEdit"
            onClick={() => handleEdit(meetup.id)}
          >
            <MdEdit size={20} color="#fff" />
            Editar
          </button>
          <button
            type="button"
            id="btCancell"
            onClick={() => {
              if (
                // eslint-disable-next-line no-alert
                window.confirm('Tem certeza que deseja excluir esse meetup ?')
              ) {
                handleDelete(meetup.id);
              }
            }}
          >
            <MdDeleteForever size={20} color="#fff" />
            Cancelar
          </button>
        </div>
      </header>
      <Banner>
        {meetup.file ? (
          <img src={meetup.file.url} alt="banner" />
        ) : (
          <span>Imagem não encontrada</span>
        )}
      </Banner>

      <p>{meetup.description}</p>

      <footer>
        <span>
          <MdEvent size={20} />
          {meetup.dateFormatted}
        </span>
        <span>
          <MdPlace size={20} />
          {meetup.localization}
        </span>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetup_id: PropTypes.string,
    }),
  }).isRequired,
};
