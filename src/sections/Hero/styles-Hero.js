import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.header`
	background: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.base};
	min-height: 100vh;
	display: flex;
	position: relative;
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

export const scrollAnimation = keyframes`
	0%, 50%, 100% {
		transform: translateY(-10%);
	}

	30% {
		transform: translateY(40%);
	}
`;

export const StyledScrollLink = styled(Link)`
	display: none;
	opacity: 0;

	@media (min-width: 992px) {
		display: flex;
		margin: 0 auto;
		padding: 10px;
		animation: ${scrollAnimation} 3s infinite;

		svg g {
			transition: stroke 0.3s ease-out;
			will-change: stroke;
		}

		&:hover {
			svg g {
				stroke: ${({ theme }) => theme.textPrimary};
			}
		}
	}
`;
