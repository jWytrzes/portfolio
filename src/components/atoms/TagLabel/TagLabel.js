import styled from 'styled-components';

const TagLabel = styled.span`
	display: inline-flex;
	margin-right: 10px;
	background-color: ${({ theme }) => theme.accentSecondary};
	color: ${({ theme }) => theme.accent};
	font-size: 1.2rem;
	border-radius: 11px;
	padding: 5px 10px;
	line-height: 1.25;

	@media (min-width: 1200px) {
		font-size: 1.4rem;
	}
`;

export default TagLabel;
