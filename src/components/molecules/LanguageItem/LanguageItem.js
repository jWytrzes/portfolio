import React from 'react';
import H4 from '../../atoms/H4/H4';
import { StyledWrapper, StyledParagraph } from './styles-LanguageItem';

const LanguageItem = ({ name, level }) => {
	return (
		<StyledWrapper>
			<H4> {name} </H4>
			<StyledParagraph> {level} </StyledParagraph>
		</StyledWrapper>
	);
};

export default LanguageItem;
