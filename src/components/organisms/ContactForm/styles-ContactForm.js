import styled from 'styled-components';
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
	margin-left: auto;
`;

export const StyledRequired = styled.span`
	color: #ff0000;
`;

export const StyledErrorMessage = styled.div`
	color: #ff0000;
	font-size: 1.4rem;
	margin-top: 5px;
`;
