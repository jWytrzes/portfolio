import React from "react"
import { ThemeProvider } from "styled-components"
import SEO from "../components/SEO"
import GlobalStyle from "../theme/GlobalStyle"
import theme from "../theme/theme"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SEO title="Joanna Wytrzęś | Portfolio" />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
