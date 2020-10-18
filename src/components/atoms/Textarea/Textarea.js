import styled from 'styled-components';

const Input = styled.textarea`
	border: none;
	border: 1px solid ${({ theme }) => theme.base};
	color: ${({ theme }) => theme.base};
	background: none;
	width: 100%;
	padding: 15px;
	border-radius: 5px;
	min-height: 120px;

	&::placeholder {
		color: inherit;
		opacity: 0.75;
	}
`;

export default Input;
