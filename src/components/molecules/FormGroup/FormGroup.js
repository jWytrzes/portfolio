import styled from 'styled-components';

const FormGroup = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 3rem;

	label {
		position: absolute;
		top: 0px;
		left: 5px;
		line-height: 1;
		font-style: italic;
		transform: translateY(-50%);
		font-size: 1.2rem;
		transition: transform 0.2s ease-out;
		background-color: ${({ theme }) => theme.accent};
		padding: 0 5px;
		font-weight: 600;

		@media (min-width: 992px) {
			font-size: 1.4rem;
		}
	}

	textarea {
		resize: vertical;
		max-width: 100%;
	}
`;

export default FormGroup;
