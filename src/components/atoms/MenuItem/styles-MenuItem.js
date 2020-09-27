import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.textPrimary};
	text-decoration: none;
	padding: 15px 30px;
`;
