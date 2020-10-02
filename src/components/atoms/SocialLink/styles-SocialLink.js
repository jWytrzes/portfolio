import styled from 'styled-components';

export const StyledLi = styled.li`
	margin-left: 25px;

	@media (min-width: 992px) {
		margin-left: 0;
		margin-top: 48px;
	}
`;

export const StyledA = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.base};
	display: flex;
	height: fit-content;
	padding: 5px;

	svg path {
		transition: fill 0.3s ease-out;
	}

	&:hover {
		svg path {
			fill: ${({ theme }) => theme.textPrimary};
		}
	}
`;
