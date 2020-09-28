import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import mobileHero from '../../images/hero-mobile.svg';
import desktopHero from '../../images/hero-desktop.svg';

export const StyledHeader = styled.header`
	background: ${({ theme }) => theme.accent} url(${mobileHero}) no-repeat
		top/cover;
	color: ${({ theme }) => theme.base};
	min-height: 100vh;
	display: flex;

	@media (min-width: 992px) {
		background-image: url(${desktopHero});
	}
`;

export const StyledSmall = styled.span`
	display: inline-flex;
	font-size: 1.4rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 1.5rem;
	line-height: 1.6;
	margin: 25px 0;
	text-align: center;
	margin-right: -1.5rem;

	@media (min-width: 360px) {
		letter-spacing: 1.9rem;
		margin-right: -1.9rem;
		font-size: 1.6rem;
	}

	@media (min-width: 992px) {
		font-size: 2rem;
	}

	@media (min-width: 1200px) {
		margin: 40px 0;
	}
`;

export const StyledHeroText = styled.div`
	text-align: center;
	width: 100%;
	margin: auto;
`;

const scrollAnimation = keyframes`
	0%, 50%, 100% {
		transform: translateY(0%);
	}

	30% {
		transform: translateY(50%);
	}
`;

export const StyledScrollLink = styled(Link)`
	display: none;

	@media (min-width: 992px) {
		display: flex;
		margin: 0 auto;
		padding: 10px;
		animation: ${scrollAnimation} 3s infinite;
	}
`;
