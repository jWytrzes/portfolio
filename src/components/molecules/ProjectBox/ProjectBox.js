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
	StyledIcon,
	StyledLinkText,
	StyledP,
} from './styles-ProjectBox';
import { ReactComponent as CodeIcon } from '../../../images/code.svg';
import { ReactComponent as LinkIcon } from '../../../images/link.svg';

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
				<StyledP> {item.description} </StyledP>
				<StyledFooter>
					<StyledButton as="a" target="_blank" href={item.links.repo}>
						<StyledIcon as={CodeIcon} />
						<StyledLinkText> Code </StyledLinkText>
					</StyledButton>
					<StyledButton as="a" target="_blank" href={item.links.live}>
						<StyledIcon as={LinkIcon} />
						<StyledLinkText> Live </StyledLinkText>
					</StyledButton>
				</StyledFooter>
			</StyledContentWrapper>
		</StyledArticle>
	);
};

export default ProjectBox;
