import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledForm = styled.form`
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
