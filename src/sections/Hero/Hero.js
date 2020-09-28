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
					<svg width={27.88} height={33.45} viewBox="0 0 32.119 37.073">
						<defs>
							<style>
								{
									'.prefix__a{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}'
								}
							</style>
						</defs>
						<path
							className="prefix__a"
							d="M2.121 21.634l13.938 13.938 13.938-13.938M2.121 2.121l13.938 13.938L29.997 2.121"
						/>
					</svg>
				</StyledScrollLink>
				<SocialMedia />
			</SectionTemplate>
		</StyledHeader>
	);
};

export default Hero;
