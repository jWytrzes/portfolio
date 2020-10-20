import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
	margin-bottom: 2.5rem;

	&:last-of-type {
		margin-bottom: 0;
	}

	@media (min-width: 992px) {
		margin-bottom: 3rem;
	}
`;

export const StyledTime = styled.span`
	font-size: 1.2rem;
	line-height: 1.5;
	position: relative;
	color: ${({ theme }) => theme.textSecondary};

	@media (min-width: 992px) {
		font-size: 1.4rem;
	}

	${({ timeline, theme }) =>
		timeline &&
		css`
			&::before {
				content: '';
				width: 15px;
				height: 15px;
				border: 3px solid ${theme.accent};
				border-radius: 15px;
				background: ${theme.base2};
				position: absolute;
				top: 1px;
				left: -40px;

				@media (min-width: 768px) {
					left: -35px;
				}
			}
		`}
`;

export const StyledParagraph = styled(Paragraph)`
	font-size: 1.5rem;
	margin-top: 0.5rem;
	margin-bottom: 0;

	@media (min-width: 992px) {
		font-size: 1.6rem;
	}
`;
