import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 1.7;
    font-family: Montserrat, sans-serif;
    background-color: ${({ theme }) => theme.base};
    color: ${({ theme }) => theme.textPrimary};

    @media(min-width: 992px) {
      font-size: 1.6rem;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  input, a, button, textarea {
    font-family: inherit;
  }

  .hideBeforeAnimation {
    visibility:hidden;
  }
`;

export default GlobalStyle;
