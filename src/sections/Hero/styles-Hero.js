import { Link } from 'gatsby';
import styled from 'styled-components';
import { ReactComponent as HeroBackground } from '../../images/bcg-anim.svg';
import {
	scrollAnimation,
	blob1Wrapper,
	blob1,
	blob2,
	blob3,
	blob3Wrapper,
	blob4Wrapper,
	blob4,
} from './animations-Hero';

export const StyledHeader = styled.header`
	background: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.base};
	min-height: 100vh;
	display: flex;
	position: relative;
`;

export const StyledHeroBackground = styled(HeroBackground)`
	position: absolute;
	bottom: 0;
	right: 0;
	height: 100%;
	width: auto;
	min-width: 100%;
	z-index: 0;

	.bcg-anim_svg__blob1-wrapper {
		animation: ${blob1Wrapper} 15s infinite ease-in-out;
	}

	.bcg-anim_svg__blob1 {
		animation: ${blob1} 60s infinite ease-in;
	}

	.bcg-anim_svg__blob2 {
		animation: ${blob2} 20s infinite linear alternate;
	}

	.bcg-anim_svg__blob3-wrapper {
		animation: ${blob3Wrapper} 20s infinite linear;
	}

	.bcg-anim_svg__blob3 {
		animation: ${blob3} 20s infinite ease-in;
	}

	.bcg-anim_svg__blob4-wrapper {
		animation: ${blob4Wrapper} 20s infinite linear alternate-reverse;
	}

	.bcg-anim_svg__blob4 {
		animation: ${blob4} 20s infinite ease-in-out;
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
	position: relative;
	z-index: 10;
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
