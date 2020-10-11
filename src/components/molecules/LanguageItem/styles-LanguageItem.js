import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.li`
	width: 50%;
	flex: 0 0 50%;

	@media (min-width: 992px) {
		width: auto;
		flex: 0 0 auto;
		margin-right: 60px;
	}
`;

export const StyledParagraph = styled(Paragraph)`
	margin: 0;
`;
