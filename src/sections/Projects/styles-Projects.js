import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../images/arrowRight.svg';
import leftBlob from '../../images/leftBlob.svg';
import rightBlob from '../../images/rightBlob.svg';

export const StyledProjects = styled.section`
	background-color: ${({ theme }) => theme.base2};
	position: relative;

	@media (min-width: 992px) {
		&::before,
		&::after {
			content: '';
			position: absolute;
			background-size: cover;
			z-index: 0;
		}

		&::before {
			background-image: url(${leftBlob});
			width: 276px;
			height: 267px;
			bottom: 30px;
			left: 10px;
		}

		&::after {
			background-image: url(${rightBlob});
			width: 332px;
			height: 339px;
			top: 50px;
			right: 0;
			transform: translateX(40%);
		}
	}

	@media (min-width: 1250px) {
		&::before {
			width: 355px;
			height: 342px;
		}

		&::after {
			width: 426px;
			height: 436px;
		}
	}

	@media (min-width: 1400px) {
		&::before {
			width: 395px;
			height: 381px;
			bottom: 88px;
			left: 112px;
		}

		&::after {
			width: 474px;
			height: 485px;
			top: 100px;
		}
	}
`;

export const StyledArrow = styled(ArrowRight)`
	margin-left: 11px;
	transition: transform 0.2s ease-out;

	.arrowRight_svg__stroke {
		transition: color 0.2s ease-out;
		will-change: color;
	}
`;

export const StyledRepoLink = styled.a`
	text-decoration: none;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.textPrimary};
	transition: color 0.2s ease-out;
	will-change: color;
	z-index: 10;

	&:hover {
		color: ${({ theme }) => theme.accent};

		${StyledArrow} {
			transform: translateX(55%);

			.arrowRight_svg__stroke {
				stroke: ${({ theme }) => theme.accent};
			}
		}
	}

	@media (min-width: 992px) {
		font-size: 1.4rem;
		position: absolute;
		bottom: 15px;
		right: 15px;
		transform: rotate(90deg);
		transform-origin: top right;
	}

	@media (min-width: 1650px) {
		right: 100px;
		bottom: 70px;
	}
`;
