import styled from 'styled-components';
import mobileHero from '../../../images/hero-mobile-white.svg';

export const StyledNav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	font-size: 1.6rem;
	height: 100vh;
	padding: 68px 25px 25px;
	background: ${({ theme }) => theme.accent} url(${mobileHero}) no-repeat fixed
		center/cover;
	transform: ${({ active }) =>
		active ? 'translateX(0)' : 'translateX(100vw)'};
	transition: transform 0.3s ease-in-out;
`;

export const StyledUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 55%;
	min-height: 300px;
`;
