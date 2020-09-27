import styled from 'styled-components';
import mobileHero from '../../images/hero-mobile.svg';

export const StyledHeader = styled.header`
	background: ${({ theme }) => theme.accent} url(${mobileHero}) no-repeat fixed
		center/cover;
	color: ${({ theme }) => theme.base};
	min-height: 100vh;
	display: flex;
`;
