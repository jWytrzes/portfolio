import React from 'react';
import { StyledLi, StyledA } from './styles-SocialLink';

const SocialLink = ({ link, label, children }) => {
	return (
		<StyledLi>
			<StyledA href={link} target="_blank" aria-label={label}>
				{children}
			</StyledA>
		</StyledLi>
	);
};

export default SocialLink;
