import styled from 'styled-components';

const Input = styled.input`
	border: none;
	border: 1px solid ${({ theme }) => theme.base};
	color: ${({ theme }) => theme.base};
	background: none;
	width: 100%;
	padding: 15px;
	border-radius: 5px;

	&::placeholder {
		color: inherit;
		opacity: 0.75;
	}
`;

export default Input;
