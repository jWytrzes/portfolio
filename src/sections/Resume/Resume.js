import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import H2 from '../../components/atoms/H2/H2';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';
import ResumeBox from '../../components/organisms/ResumeBox/ResumeBox';
import ListItem from '../../components/atoms/ListItem/ListItem';
import ResumeTitle from '../../components/atoms/ResumeTitle/ResumeTitle';
import LanguageItem from '../../components/molecules/LanguageItem/LanguageItem';
import {
	StyledResume,
	StyledInner,
	StyledList,
	StyledBoxWrapper,
	StyledLangs,
	StyledInnerColumn,
} from './styles-Resume';

const resumeData = {
	experience: [
		{
			title: 'Frontend Developer',
			time: 'november 2017 - present | Internet Art | 1/2 time',
			description:
				'Creating websites templates using HTML, CSS, JavaScript, jQuery, Bootstrap',
		},
		{
			title: 'Creating graphic templates for blog platform (non-profit)',
			time: 'november 2014 - january 2017',
			description: 'Creating graphic templates, mainly using HTML and CSS',
		},
	],
	skills: [
		'HTML, CSS',
		'JavaScript',
		'ReactJS',
		'git',
		'Adobe XD, Figma',
		'English B2/C1',
		'teamwork',
		'attention to detail',
		'autonomy',
		'accepting constructive criticism and following received advices',
	],
	education: [
		{
			title: 'Computer Science',
			time: 'october 2018 - present | Rzeszów University of Technology',
			description: 'Bachelor of Engineering, full-time',
		},
	],
	courses: [
		{
			title: '"React w Praktyce"',
			link: 'https://eduweb.pl/programowanie-i-www/reactjs/react-w-praktyce',
			time: 'january 2020 | Adam Romański',
			description:
				'The course focused on presenting the practical dimension of application development using ReactJS and included an introduction to the technologies and tools used in working with this library.',
		},
		{
			title: 'FrontDev Advanced',
			link:
				'https://softwaretalks.pl/wydarzenia/akademia-developera-frontdev-advanced/',
			time: 'june 2019 | PGS Software',
			description:
				'The thematic scope of the course included the theory and practice of creating websites user interfaces using ReactJS, Redux and others.',
		},
	],
	languages: [
		{
			name: 'Polish',
			level: 'native',
		},
		{
			name: 'English',
			level: 'B2/C1',
		},
	],
};

const Resume = () => {
	return (
		<StyledResume id="resume">
			<SectionTemplate>
				<H2> Curriculum Vitae </H2>
				<div>
					<Paragraph noTopMargin>
						Below you can find a brief summary of my skills and experience. If
						you are interested you can download my full CV/resume clicking the
						button below.
					</Paragraph>
					<Button as="a" href="./Joanna_Wytrzęś_CV.pdf" download>
						Download CV
					</Button>
				</div>
				<StyledInner>
					<StyledInnerColumn>
						<ResumeBox
							header="Experience"
							data={resumeData.experience}
							timeline
						/>
						<StyledBoxWrapper>
							<ResumeTitle> Skills </ResumeTitle>
							<StyledList>
								{resumeData.skills.map((item) => (
									<ListItem key={item}> {item} </ListItem>
								))}
							</StyledList>
						</StyledBoxWrapper>
					</StyledInnerColumn>
					<StyledInnerColumn>
						<ResumeBox header="Education" data={resumeData.education} />
						<ResumeBox header="Finished Courses" data={resumeData.courses} />
						<StyledBoxWrapper>
							<ResumeTitle>Languages</ResumeTitle>
							<StyledLangs>
								{resumeData.languages.map((item) => (
									<LanguageItem
										key={item.name}
										name={item.name}
										level={item.level}
									/>
								))}
							</StyledLangs>
						</StyledBoxWrapper>
					</StyledInnerColumn>
				</StyledInner>
			</SectionTemplate>
		</StyledResume>
	);
};

export default Resume;
