import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px auto;

  h1 {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #1270e3;
    margin-bottom: 30px;

    small {
      color: #59c2ff;
      font-size: 14px;
    }
  }

  svg {
    margin-right: 5px;
  }

  button {
    margin-top: 15px;
  }
`;
