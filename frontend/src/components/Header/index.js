import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

import logo from '~/Assets/M.svg';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function signOutProfile() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <strong>{profile ? profile.name : ''}</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <button type="button" onClick={signOutProfile}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
