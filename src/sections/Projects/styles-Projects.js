import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../images/arrowRight.svg';

export const StyledProjects = styled.section`
	background-color: ${({ theme }) => theme.base2};
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
	transition: color 0.2s ease-out;
	will-change: color;

	&:hover {
		color: ${({ theme }) => theme.accent};

		${StyledArrow} {
			transform: translateX(55%);

			.arrowRight_svg__stroke {
				stroke: ${({ theme }) => theme.accent};
			}
		}
	}
`;
