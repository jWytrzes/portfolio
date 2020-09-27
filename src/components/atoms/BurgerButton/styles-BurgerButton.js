import styled, { css } from "styled-components"

export const StyledButton = styled.button`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: -10px -10px 0 auto;

  ${({ active }) =>
    active &&
    css`
      ${StyledInner} {
        background-color: transparent;

        &::before {
          transform: translateY(8px) rotate(45deg);
        }

        &::after {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    `}
`

export const StyledBox = styled.span`
  width: 25px;
  height: 18px;
  display: inline-block;
  position: relative;
`

const burgerLine = css`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.base};
  position: absolute;
`

export const StyledInner = styled.span`
  ${burgerLine};

  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s ease-in-out;

  &::before,
  &::after {
    ${burgerLine};

    content: "";
    left: 0;
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }
`
