import React from 'react';
import A from '../../atoms/A/A';
import H4 from '../../atoms/H4/H4';
import {
	StyledParagraph,
	StyledTime,
	StyledWrapper,
} from './styles-ResumeItem';

const ResumeItem = ({ title, time, description, link, timeline }) => {
	return (
		<StyledWrapper>
			<H4>{link ? <A href={link}>{title}</A> : title}</H4>
			<StyledTime timeline={timeline}>{time}</StyledTime>
			<StyledParagraph> {description} </StyledParagraph>
		</StyledWrapper>
	);
};

export default ResumeItem;
