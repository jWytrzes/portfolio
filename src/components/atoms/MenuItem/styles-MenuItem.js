import styled from 'styled-components';
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
	color: ${({ theme }) => theme.textPrimary};
	text-decoration: none;
	padding: 15px 30px;

	@media (min-width: 992px) {
		padding: 9px 25px;
		border-radius: 30px;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		will-change: background-color, color;

		&:hover {
			background-color: ${({ theme }) => theme.accent};
			color: ${({ theme }) => theme.base};
		}
	}
`;
