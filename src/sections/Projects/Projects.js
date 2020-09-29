import React from 'react';
import H2 from '../../components/atoms/H2/H2';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import ProjectBox from '../../components/molecules/ProjectBox/ProjectBox';
import { StyledProjects, StyledRepoLink, StyledArrow } from './styles-Projects';
import solfranMockup from '../../images/projects/solfranMockup.png';
import moodtrackerMockup from '../../images/projects/mood-trackerMockup.png';

const projects = [
	{
		title: 'SolFran Energy Website',
		description:
			'Website made using ReactJS which main goal is to present offer of the company. There is also an admin panel that allows to edit content of the homepage and manage the posts on the blog page.',
		tags: ['React', 'Firebase'],
		links: {
			repo: 'https://github.com/jWytrzes/solfran',
			live: 'https://solfranenergy.pl/',
		},
		picture: solfranMockup,
	},
	{
		title: 'Mood Tracker App',
		description:
			'Simple web application that allows the user to keep track of their daily moods. Every day user can select how do they feel and type a note. Then they can easily check choosen mood and journal note on the calendar.',
		tags: ['React', 'Firebase'],
		links: {
			repo: 'https://github.com/jWytrzes/mood-tracker',
			live: 'https://moodtracker-24d44.web.app/',
		},

		picture: moodtrackerMockup,
	},
];

const Projects = () => {
	return (
		<StyledProjects id="projects">
			<SectionTemplate>
				<H2> My projects </H2>
				<div>
					{projects.map((item) => (
						<ProjectBox item={item} key={item.title} />
					))}
					<StyledRepoLink href="https://github.com/jWytrzes/portfolio">
						Check out the source code of this website!
						<StyledArrow />
					</StyledRepoLink>
				</div>
			</SectionTemplate>
		</StyledProjects>
	);
};

export default Projects;
