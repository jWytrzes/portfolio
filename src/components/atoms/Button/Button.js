import styled from 'styled-components';

const Button = styled.button`
	color: ${({ theme, secondary }) => (secondary ? theme.accent : theme.base)};
	background-color: ${({ theme, secondary }) =>
		secondary ? theme.accentSecondary : theme.accent};
	padding: 18px 24px;
	border-radius: 11px;
	border: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	line-height: 1;
	font-size: inherit;
	cursor: pointer;
	transition: background-color 0.2s ease-out;
	will-change: background-color;

	&:hover {
		background-color: ${({ theme, secondary }) =>
			secondary ? theme.accentSecondaryDarker : theme.accentDarker};
	}
`;

export default Button;
