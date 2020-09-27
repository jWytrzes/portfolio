import React from "react"
import Menu from "../../components/organisms/Menu/Menu"
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate"
import { StyledHeader } from "./styles-Hero"

const Hero = () => {
  return (
    <StyledHeader id="hero">
      <SectionTemplate>
        <Menu />
      </SectionTemplate>
    </StyledHeader>
  )
}

export default Hero
