import styled from "styled-components"

export const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  font-size: 1.6rem;
  transform: ${({ active }) =>
    active ? "translateX(0)" : "translateX(100vw)"};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 55%;
  min-height: 300px;
`
