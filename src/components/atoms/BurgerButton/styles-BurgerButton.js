import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
	padding: 10px;
	height: 38px;
	display: inline-block;
	cursor: pointer;
	background-color: transparent;
	border: 0;
	margin: 0 0 0 auto;
	z-index: 999;

	${({ active }) =>
		active &&
		css`
			${StyledInner} {
				background-color: transparent;

				&::before,
				&::after {
					background-color: ${({ theme }) => theme.accent};
				}

				&::before {
					transform: translateY(8px) rotate(45deg);
				}

				&::after {
					transform: translateY(-8px) rotate(-45deg);
				}
			}
		`}

	@media(min-width: 992px) {
		display: none;
	}
`;

export const StyledBox = styled.span`
	width: 25px;
	height: 18px;
	display: inline-block;
	position: relative;
`;

const burgerLine = css`
	width: 100%;
	height: 2px;
	background-color: ${({ theme }) => theme.base};
	position: absolute;
`;

export const StyledInner = styled.span`
	${burgerLine};

	left: 0;
	top: 50%;
	transform: translateY(-50%);
	transition: background-color 0.2s ease-in-out;
	will-change: background-color;

	&::before,
	&::after {
		${burgerLine};

		content: '';
		left: 0;
		transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
		will-change: background-color;
	}

	&::before {
		top: -8px;
	}

	&::after {
		top: 8px;
	}
`;
