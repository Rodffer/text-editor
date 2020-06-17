import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: -webkit-linear-gradient(45deg,  #1270e3  0%, #59c2ff 100%);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #5d606a;
    font-size: 14px;
    font-family: 'Lora', serif;
  }

  button {
    cursor: pointer;
  }
`;
