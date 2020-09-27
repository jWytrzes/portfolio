import React from "react"
import PropTypes from "prop-types"
import MenuItem from "../../atoms/MenuItem/MenuItem"
import { StyledNav, StyledUl } from "./styles-Navigation"

const menuItems = [
  { text: "Home", link: "#hero" },
  { text: "Projects", link: "#projects" },
  { text: "About", link: "#about" },
  { text: "Resume", link: "#resume" },
  { text: "Contact", link: "#contact" },
]

const Navigation = ({ active }) => {
  return (
    <StyledNav active={active}>
      <StyledUl>
        {menuItems.map(item => (
          <MenuItem item={item} key={item.link} />
        ))}
      </StyledUl>
    </StyledNav>
  )
}

Navigation.defaultProps = {
  active: false,
}

Navigation.propTypes = {
  active: PropTypes.bool,
}

export default Navigation
