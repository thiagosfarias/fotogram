import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #c94b4b;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4b134f, #c94b4b);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4b134f, #c94b4b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: Open-Sans, Helvetica, Sans-Serif;

  }
`;