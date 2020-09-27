import styled from 'styled-components';
import mobileHero from '../../images/hero-mobile.svg';

export const StyledHeader = styled.header`
	background: ${({ theme }) => theme.accent} url(${mobileHero}) no-repeat
		top/cover;
	color: ${({ theme }) => theme.base};
	min-height: 100vh;
	display: flex;
`;

export const StyledSmall = styled.span`
	display: inline-flex;
	font-size: 1.6rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 19px;
	line-height: 1.6;
	margin: 25px 0;
	text-align: center;
`;

export const StyledHeroText = styled.div`
	text-align: center;
	width: 100%;
	margin: auto;
`;
