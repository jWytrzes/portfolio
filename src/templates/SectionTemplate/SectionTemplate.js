import React from 'react';
import { StyledWrapper } from './styles-SectionTemplate';

const SectionTemplate = ({ smallPadding, children }) => {
	return <StyledWrapper smallPadding={smallPadding}>{children}</StyledWrapper>;
};

export default SectionTemplate;
