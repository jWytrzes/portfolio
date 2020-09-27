import React from "react"
import PropTypes from "prop-types"
import { StyledBox, StyledButton, StyledInner } from "./styles-BurgerButton"

const BurgerButton = ({ active, ...props }) => {
  return (
    <StyledButton active={active} {...props}>
      <StyledBox>
        <StyledInner />
      </StyledBox>
    </StyledButton>
  )
}

BurgerButton.defaultProps = {
  active: false,
}

BurgerButton.propTypes = {
  active: PropTypes.bool,
}

export default BurgerButton
