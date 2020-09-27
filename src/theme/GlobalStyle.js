import { createGlobalStyle } from "styled-components"

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
    font-family: Montserrat;
    background-color: ${({ theme }) => theme.base};
    color: ${({ theme }) => theme.textPrimary};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  input, a, button, textarea {
    font-family: inherit;
  }
`

export default GlobalStyle
