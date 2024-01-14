import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

// font-family: 'Montserrat', sans-serif;
// font-family: 'Roboto', sans-serif;