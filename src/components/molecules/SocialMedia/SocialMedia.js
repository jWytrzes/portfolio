import React from 'react';
import SocialLink from '../../atoms/SocialLink/SocialLink';
import { StyledUl, StyledIcon } from './styles-SocialMedia';
import { ReactComponent as GithubIcon } from '../../../images/github.svg';
import { ReactComponent as LinkedinIcon } from '../../../images/linkedin.svg';

const SocialMedia = ({ ...props }) => {
	return (
		<StyledUl {...props}>
			<SocialLink link="https://www.linkedin.com/in/joanna-wytrz%C4%99%C5%9B-45379a178/">
				<StyledIcon as={LinkedinIcon} />
			</SocialLink>
			<SocialLink link="https://github.com/jWytrzes/">
				<StyledIcon as={GithubIcon} />
			</SocialLink>
		</StyledUl>
	);
};

export default SocialMedia;
