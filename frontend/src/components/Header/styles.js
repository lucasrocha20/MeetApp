import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  background-color: #000;
`;

export const Content = styled.div`
  width: 900px;
  max-width: 900px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  aside {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      width: 70px;
      height: 42px;
      border-radius: 4px;
      color: #fff;
      background-color: #d44059;
      border: none;
      transition: 0.2s;

      :hover {
        opacity: 0.9;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  text-align: right;

  strong {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  a {
    color: #999;
    font-size: 14px;
  }
`;
