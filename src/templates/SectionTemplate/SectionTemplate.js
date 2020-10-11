import React from 'react';
import { StyledWrapper } from './styles-SectionTemplate';

const SectionTemplate = ({ smallPadding, verticalCenter, children }) => {
	return (
		<StyledWrapper smallPadding={smallPadding} verticalCenter={verticalCenter}>
			{children}
		</StyledWrapper>
	);
};

export default SectionTemplate;
