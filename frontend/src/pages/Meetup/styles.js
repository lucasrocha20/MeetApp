import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    input {
      height: 50px;
      margin-bottom: 10px;
      border: none;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      padding: 0 20px;
      font-size: 18;
      color: #fff;
    }

    input#description {
      height: 200px;
    }

    > button {
      width: 180px;
      height: 42px;
      border-radius: 4px;
      background: #f94d6a;
      border: none;
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      padding: 0 15px;
      margin-bottom: 50px;
      transition: 0.2s;

      :hover {
        opacity: 0.9;
      }
    }
  }
`;
