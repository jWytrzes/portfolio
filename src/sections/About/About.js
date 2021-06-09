import { Link } from 'gatsby';
import React from 'react';
import H2 from '../../components/atoms/H2/H2';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';
import CoderIllustration from '../../components/atoms/CoderIllustration/CoderIllustration';
import {
	StyledAbout,
	StyledImgWrapper,
	StyledInnerWrapper,
	StyledTextWrapper,
} from './styles-About';

const About = () => {
	return (
		<StyledAbout id="about">
			<SectionTemplate verticalCenter id="aboutInner">
				<H2> About me </H2>
				<StyledInnerWrapper>
					<StyledImgWrapper>
						<CoderIllustration />
					</StyledImgWrapper>
					<StyledTextWrapper>
						<Paragraph>
							My name is Joanna Wytrzęś and I am a frontend developer on
							junior/early-mid level based in Rzeszów, Poland. Currently I am
							studying Computer Science and working part time. At my last job I
							mailny used HTML, CSS and JavaScript with libraries such as jQuery
							and Bootstrap. But outside the workplace, I constantly try to
							develop and learn modern technologies and I truly enjoy it.
							Besides coding I am interested in design, especially web and app
							design and also interior design. I also love reading good
							science-fiction books. That's all about me, if you want to know
							more, check out my projects and resume. Enjoy!
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
