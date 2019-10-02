import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #22202c;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      height: 50px;
      border-radius: 4px;
      opacity: 0.2;
      font-size: 18px;
      padding: 0 20px;
      margin-bottom: 10px;
    }

    button {
      height: 50px;
      border-radius: 4px;
      background-color: #f94d6a;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border: none;
      margin-top: 5px;
    }

    a {
      opacity: 0.6;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      margin-top: 20px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;
