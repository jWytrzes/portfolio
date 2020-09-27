import React from 'react';
import Menu from '../../components/organisms/Menu/Menu';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import { StyledHeader } from './styles-Hero';

const Hero = () => {
	return (
		<StyledHeader id="hero">
			<SectionTemplate>
				<Menu />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
					temporibus eum quae quaerat eius dolorum blanditiis, cum
					necessitatibus quod provident asperiores iure, voluptate iusto! Alias
					nisi recusandae hic eum quod.
				</p>
			</SectionTemplate>
		</StyledHeader>
	);
};

export default Hero;
