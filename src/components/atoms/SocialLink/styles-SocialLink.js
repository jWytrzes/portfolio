import styled from 'styled-components';

export const StyledLi = styled.li`
	margin-left: 25px;

	svg {
		width: 24px;
		height: auto;
		fill: ${({ theme }) => theme.base};
		transition: fill 0.2s ease-in-out;

		@media (min-width: 992px) {
			width: 36px;
		}
	}

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

	&:hover {
		svg {
			fill: ${({ theme }) => theme.textPrimary};
		}
	}
`;
