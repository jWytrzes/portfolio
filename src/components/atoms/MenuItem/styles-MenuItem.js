import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const StyledLi = styled.li`
	@media (min-width: 992px) {
		margin-right: 50px;

		&:last-of-type {
			margin-right: 0;
		}
	}
`;

export const StyledLink = styled(Link)`
	color: ${({ theme, active }) => (active ? theme.base : theme.textPrimary)};
	text-decoration: none;
	padding: 15px 30px;
	border-radius: 30px;
	background-color: ${({ theme, active }) =>
		active ? theme.accent : 'transparent'};
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
	will-change: background-color, color;

	@media (min-width: 992px) {
		padding: 9px 25px;

		&:hover {
			${({ active }) =>
				!active &&
				css`
					background-color: ${({ theme }) => theme.accentSecondary};
					color: ${({ theme }) => theme.accent};
				`}
		}
	}
`;
