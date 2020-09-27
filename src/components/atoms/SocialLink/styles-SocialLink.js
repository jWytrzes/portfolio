import styled from 'styled-components';

export const StyledLi = styled.li`
	svg {
		width: 24px;
		height: auto;
		margin-left: 25px;
		fill: ${({ theme }) => theme.base};
	}
`;

export const StyledA = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.base};
`;
