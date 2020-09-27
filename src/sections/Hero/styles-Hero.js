import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.base};
  min-height: 100vh;
  display: flex;
`
