import styled from 'styled-components';

const Button = styled.button`
	color: ${({ theme, secondary }) => (secondary ? theme.accent : theme.base)};
	background-color: ${({ theme, secondary }) =>
		secondary ? theme.accentSecondary : theme.accent};
	padding: 14px 24px;
	border-radius: 11px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s ease-out;
	will-change: background-color;

	&:hover {
		background-color: ${({ theme, secondary }) =>
			secondary ? theme.accentSecondaryDarker : theme.accentDarker};
	}
`;

export default Button;
