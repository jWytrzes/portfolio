import { Link } from 'gatsby';
import React from 'react';
import H2 from '../../components/atoms/H2/H2';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';
import { ReactComponent as CoderIllustration } from '../../images/coderIllustration.svg';
import {
	StyledAbout,
	StyledImgWrapper,
	StyledInnerWrapper,
	StyledTextWrapper,
} from './styles-About';

const About = () => {
	return (
		<StyledAbout id="about">
			<SectionTemplate verticalCenter>
				<H2> About me </H2>
				<StyledInnerWrapper>
					<StyledImgWrapper>
						<CoderIllustration />
					</StyledImgWrapper>
					<StyledTextWrapper>
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							lobortis finibus eros quis interdum. In cursus urna dui, non
							sodales mi blandit at. Aenean sed arcu eu neque suscipit sodales.
							Nam ac mollis risus. Vestibulum eros lacus, euismod ac ultricies
							sit amet, ultrices eu purus. Quisque sed aliquam lectus. Nunc est
							nibh, vehicula eget sodales ac, tincidunt id lectus. Vestibulum
							sit amet tincidunt tortor. Sed sit amet nulla metus.Lorem ipsum
							dolor sit amet, consectetur adipiscing elit. Quisque lobortis
							finibus eros quis interdum. In cursus urna dui, non sodales mi
							blandit at. Aenean sed arcu eu neque suscipit sodales.
						</Paragraph>
						<Button as={Link} to="#resume">
							See my resume
						</Button>
					</StyledTextWrapper>
				</StyledInnerWrapper>
			</SectionTemplate>
		</StyledAbout>
	);
};

export default About;
