import React from 'react';
import H4 from '../../atoms/H4/H4';
import {
	StyledParagraph,
	StyledTime,
	StyledWrapper,
	StyledLink,
} from './styles-ResumeItem';

const ResumeItem = ({ title, time, description, link, timeline }) => {
	return (
		<StyledWrapper>
			<H4>
				{link ? (
					<StyledLink href={link}>
						<span>{title}</span>
					</StyledLink>
				) : (
					title
				)}
			</H4>
			<StyledTime timeline={timeline}>{time}</StyledTime>
			<StyledParagraph> {description} </StyledParagraph>
		</StyledWrapper>
	);
};

export default ResumeItem;
