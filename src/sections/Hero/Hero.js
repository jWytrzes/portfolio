import React from 'react';
import H1 from '../../components/atoms/H1/H1';
import SocialMedia from '../../components/molecules/SocialMedia/SocialMedia';
import Menu from '../../components/organisms/Menu/Menu';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import {
	StyledHeader,
	StyledSmall,
	StyledHeroText,
	StyledScrollLink,
} from './styles-Hero';
import { ReactComponent as ChevronsDown } from '../../images/chevrons-down.svg';

const Hero = () => {
	return (
		<StyledHeader id="hero">
			<SectionTemplate smallPadding>
				<Menu />
				<StyledHeroText>
					<StyledSmall>Hello, I am</StyledSmall>
					<H1>
						Joanna <br />
						Wytrzęś
					</H1>
					<StyledSmall>front-end developer</StyledSmall>
				</StyledHeroText>
				<StyledScrollLink to="#projects">
					<ChevronsDown />
				</StyledScrollLink>
				<SocialMedia />
			</SectionTemplate>
		</StyledHeader>
	);
};

export default Hero;
