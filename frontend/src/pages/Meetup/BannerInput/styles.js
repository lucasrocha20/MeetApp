import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  max-width: 900px;
  width: 900px;
  background: rgba(0, 0, 0, 0.4);
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 4px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 300px;
    max-width: 900px;
    width: 900px;

    strong {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.2);
    }

    svg {
      color: rgba(255, 255, 255, 0.2);
    }

    img {
      height: 300px;
      max-width: 900px;
      border-radius: 4px;
    }

    div {
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    input {
      display: none;
    }
  }
`;
