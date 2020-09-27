import React from "react"
import { StyledLink } from "./styles-MenuItem"

const MenuItem = ({ item }) => {
  return (
    <li>
      <StyledLink to={item.link}> {item.text} </StyledLink>
    </li>
  )
}

export default MenuItem
