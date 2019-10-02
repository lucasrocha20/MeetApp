import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    strong {
      color: #fff;
      font-size: 32px;
      cursor: default;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 15px;
      height: 42px;
      width: 170px;
      border-radius: 4px;
      background-color: #f94d6a;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: 0.2s;

      :hover {
        opacity: 0.9;
      }
    }
  }
`;

export const ListContainer = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  height: 62px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;

  strong {
    color: #fff;
    font-size: 18px;
  }

  span {
    color: rgba(255, 255, 255, 0.4);
    font-size: 16px;
    margin-right: 30px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;
