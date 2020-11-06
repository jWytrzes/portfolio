import React from 'react';
import H1 from '../../components/atoms/H1/H1';
import SocialMedia from '../../components/molecules/SocialMedia/SocialMedia';
import Menu from '../../components/organisms/Menu/Menu';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import { ReactComponent as ChevronsDown } from '../../images/chevrons-down.svg';
import Background from '../../components/atoms/Background/Background';
import {
	StyledHeader,
	StyledSmall,
	StyledHeroText,
	StyledScrollLink,
} from './styles-Hero';

const Hero = () => {
	return (
		<StyledHeader id="hero">
			<Background />
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
