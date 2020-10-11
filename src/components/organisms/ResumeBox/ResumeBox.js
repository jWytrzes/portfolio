import React from 'react';
import ResumeTitle from '../../atoms/ResumeTitle/ResumeTitle';
import ResumeItem from '../../molecules/ResumeItem/ResumeItem';
import { StyledWrapper, StyledContent } from './styles-ResumeBox';

const ResumeBox = ({ header, data, timeline }) => {
	return (
		<StyledWrapper>
			<ResumeTitle as="h3">{header}</ResumeTitle>
			<StyledContent>
				{data.map((item) => (
					<ResumeItem
						title={item.title}
						time={item.time}
						description={item.description}
						link={item.link}
						key={item.time}
					/>
				))}
			</StyledContent>
		</StyledWrapper>
	);
};

export default ResumeBox;
