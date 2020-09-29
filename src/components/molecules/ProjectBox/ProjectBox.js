import React from 'react';
import H3 from '../../atoms/H3/H3';
import TagLabel from '../../atoms/TagLabel/TagLabel';
import {
	StyledArticle,
	StyledThumbnailWrapper,
	StyledThumbnail,
	StyledContentWrapper,
	StyledLabelsWrapper,
	StyledFooter,
	StyledButton,
	StyledSvg,
} from './styles-ProjectBox';

const ProjectBox = ({ item }) => {
	return (
		<StyledArticle>
			<StyledThumbnailWrapper>
				<StyledThumbnail src={item.picture} alt={item.title} />
			</StyledThumbnailWrapper>

			<StyledContentWrapper>
				<StyledLabelsWrapper>
					{item.tags.map((tag) => (
						<TagLabel key={tag}> {tag} </TagLabel>
					))}
				</StyledLabelsWrapper>
				<H3> {item.title} </H3>
				<p> {item.description} </p>
				<StyledFooter>
					<StyledButton as="a" target="_blank" href={item.links.repo}>
						<StyledSvg viewBox="0 0 20.688 14.041">
							<defs>
								<style>
									{
										'.prefix__a{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}'
									}
								</style>
							</defs>
							<path
								className="prefix__a"
								d="M14.081 12.626l5.606-5.606-5.606-5.606M6.606 1.414L1 7.02l5.606 5.606"
							/>
						</StyledSvg>
					</StyledButton>
					<StyledButton as="a" target="_blank" href={item.links.repo}>
						<StyledSvg viewBox="0 0 20.008 19.99">
							<defs>
								<style>
									{
										'.prefix__a{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}'
									}
								</style>
							</defs>
							<path
								className="prefix__a"
								d="M8.204 10.892a4.5 4.5 0 006.786.486l2.7-2.7a4.5 4.5 0 10-6.363-6.363L9.779 3.857"
							/>
							<path
								className="prefix__a"
								d="M11.807 9.098a4.5 4.5 0 00-6.786-.486l-2.7 2.7a4.5 4.5 0 106.363 6.363l1.538-1.539"
							/>
						</StyledSvg>
					</StyledButton>
				</StyledFooter>
			</StyledContentWrapper>
		</StyledArticle>
	);
};

export default ProjectBox;
