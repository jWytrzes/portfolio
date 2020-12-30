import styled from 'styled-components';

export const StyledLi = styled.li`
	margin-left: 25px;

	@media (min-width: 992px) {
		margin-left: 0;
		margin-top: 40px;
	}
`;

export const StyledA = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.base};
	display: flex;
	height: fit-content;
	padding: 5px;

	svg {
		[stroke] {
			transition: stroke 0.3s ease-out;
		}

		[fill] {
			transition: fill 0.3s ease-out;
		}
	}

	&:hover {
		svg {
			[stroke] {
				stroke: ${({ theme }) => theme.textPrimary};
			}

			[fill] {
				fill: ${({ theme }) => theme.textPrimary};
			}
		}
	}
`;
