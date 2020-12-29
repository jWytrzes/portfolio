import React, { forwardRef } from 'react';
import SocialLink from '../../atoms/SocialLink/SocialLink';
import { StyledUl, StyledIcon, StyledIconStroke } from './styles-SocialMedia';
import { ReactComponent as GithubIcon } from '../../../images/github.svg';
import { ReactComponent as LinkedinIcon } from '../../../images/linkedin.svg';
import { ReactComponent as DribbbleIcon } from '../../../images/dribbble.svg';

const SocialMedia = forwardRef((props, ref) => {
	return (
		<StyledUl {...props} ref={ref}>
			<SocialLink link="https://github.com/jWytrzes/" label="GitHub">
				<StyledIcon as={GithubIcon} />
			</SocialLink>
			<SocialLink link="https://dribbble.com/asiozaur_" label="Dribbble">
				<StyledIconStroke as={DribbbleIcon} />
			</SocialLink>
			<SocialLink
				link="https://www.linkedin.com/in/joanna-wytrz%C4%99%C5%9B-45379a178/"
				label="Linkedin"
			>
				<StyledIcon as={LinkedinIcon} />
			</SocialLink>
		</StyledUl>
	);
});

export default SocialMedia;
