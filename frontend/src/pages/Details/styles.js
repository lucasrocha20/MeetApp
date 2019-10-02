import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    div {
      display: flex;
      flex-direction: row;

      button#btEdit {
        display: flex;
        justify-content: space-around;
        padding: 0 10px;
        align-items: center;
        height: 42px;
        border-radius: 4px;
        background-color: #4abaf9;
        border: none;
        width: 115px;
        color: #fff;
        font-weight: bold;
        margin-right: 15px;
        transition: 0.2s;

        :hover {
          opacity: 0.9;
        }
      }

      button#btCancell {
        display: flex;
        justify-content: space-around;
        padding: 0 10px;
        align-items: center;
        height: 42px;
        border-radius: 4px;
        background-color: #d44059;
        border: none;
        width: 115px;
        color: #fff;
        font-weight: bold;
        transition: 0.2s;

        :hover {
          opacity: 0.9;
        }
      }
    }
  }

  p {
    display: flex;
    justify-content: flex-start;
    color: #fff;
    font-size: 18px;
    margin-bottom: 30px;
  }

  footer {
    display: flex;
    justify-content: flex-start;
    color: rgba(255, 255, 255, 0.3);
    font-size: 16px;

    span {
      display: flex;
      align-items: center;
      margin-right: 30px;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Banner = styled.div`
  height: 300px;
  width: 900px;
  max-width: 900px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  margin: 50px auto 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 900px;
    height: 300px;
    border-radius: 4px;
  }

  span {
    color: #fff;
    font-size: 16px;
  }
`;
