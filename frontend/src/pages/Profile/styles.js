import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border-radius: 4px;
      height: 50px;
      font-size: 18px;
      padding: 0 20px;
      border: none;
      color: #fff;
    }

    hr {
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin: 20px 0 20px;
      height: 1px;
      background: (255, 255, 255, 0.2);
    }

    button {
      align-self: flex-end;
      display: flex;
      justify-content: space-around;
      padding: 0 15px;
      align-items: center;
      width: 160px;
      height: 42px;
      border-radius: 4px;
      background-color: #f94d6a;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: none;
      margin-top: 10px;
    }
  }
`;
