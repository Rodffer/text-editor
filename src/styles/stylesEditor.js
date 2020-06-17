import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

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
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eeee;
    padding: 200px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
