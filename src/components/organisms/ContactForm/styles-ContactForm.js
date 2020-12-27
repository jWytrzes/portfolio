import styled, { keyframes } from 'styled-components';
import Button from '../../atoms/Button/Button';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: 576px;
	margin: 0 auto;
`;

export const StyledButton = styled(Button)`
	margin-left: 1.5rem;
`;

export const StyledRequired = styled.span`
	color: #ff0000;
`;

export const StyledErrorMessage = styled.div`
	color: #ff0000;
	font-size: 1.4rem;
	margin-top: 5px;
`;

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
`;

export const StyledLoading = styled.img`
	animation: ${spin} 0.7s infinite linear;
	transform-origin: center;
`;

export const StyledButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
