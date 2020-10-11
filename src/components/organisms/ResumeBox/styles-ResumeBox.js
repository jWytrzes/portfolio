import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
	margin-bottom: 3.5rem;

	@media (min-width: 992px) {
		margin-bottom: 5rem;
	}
`;

export const StyledContent = styled.div`
	position: relative;
	padding-left: ${({ timeline }) => (timeline ? '40px' : 0)};

	@media (min-width: 768px) {
		padding-left: ${({ timeline }) => (timeline ? '58px' : 0)};
	}

	${({ timeline }) =>
		timeline &&
		css`
			&::before {
				content: '';
				width: 3px;
				height: 100%;
				position: absolute;
				top: 0;
				left: 6px;
				background: ${({ theme }) => theme.accent};

				@media (min-width: 768px) {
					left: 29px;
				}
			}
		`}
`;
