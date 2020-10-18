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
	font-size: 1.4rem;

	&::placeholder {
		color: inherit;
		opacity: 0.75;
	}
	@media (min-width: 992px) {
		font-size: 1.6rem;
	}
`;

export default Input;
