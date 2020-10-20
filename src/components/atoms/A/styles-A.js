import styled from 'styled-components';

export const StyledA = styled.a`
	text-decoration: none;
	color: ${({ dark, theme }) => (dark ? theme.textPrimary : theme.accent)};
	display: inline-flex;
	position: relative;
	transition: color 0.3s ease-out;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.accentSecondary};
		bottom: 0;
		left: 0;
		z-index: 0;
		transform: translateY(24%) scaleY(0.42);
		transition: transform 0.3s ease-out;
	}

	&:hover {
		color: ${({ theme }) => theme.accentDarker};

		&::before {
			transform: translateY(0%) scaleY(1);
		}
	}
`;

export const StyledText = styled.span`
	position: relative;
	z-index: 9;
`;
