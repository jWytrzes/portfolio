import React from 'react';
import { StyledLi, StyledA } from './styles-SocialLink';

const SocialLink = ({ link, children }) => {
	return (
		<StyledLi>
			<StyledA href={link} target="_blank">
				{children}
			</StyledA>
		</StyledLi>
	);
};

export default SocialLink;
