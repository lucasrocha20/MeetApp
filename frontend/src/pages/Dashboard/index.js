import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import history from '~/services/history';

import { Container, ListContainer } from './styles';

import { loadMeetUpRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(loadMeetUpRequest());
  }, [dispatch]);

  function handleDetails(meetup_id) {
    history.push(`/details/${meetup_id}`);
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup/new">
          <MdAddCircleOutline size={20} />
          Novo meetup
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <ListContainer
            key={meetup.id}
            onClick={() => handleDetails(meetup.id)}
          >
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.dateFormatted}</span>

              <MdChevronRight size={24} color="#fff" />
            </div>
          </ListContainer>
        ))}
      </ul>
    </Container>
  );
}
