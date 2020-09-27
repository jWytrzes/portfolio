import React from 'react';
import H1 from '../../components/atoms/H1/H1';
import SocialMedia from '../../components/molecules/SocialMedia/SocialMedia';
import Menu from '../../components/organisms/Menu/Menu';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import { StyledHeader, StyledSmall, StyledHeroText } from './styles-Hero';

const Hero = () => {
	return (
		<StyledHeader id="hero">
			<SectionTemplate>
				<Menu />
				<StyledHeroText>
					<StyledSmall>Hello, I am</StyledSmall>
					<H1>
						Joanna <br />
						Wytrzęś
					</H1>
					<StyledSmall>front-end developer</StyledSmall>
				</StyledHeroText>
				<SocialMedia />
			</SectionTemplate>
		</StyledHeader>
	);
};

export default Hero;
