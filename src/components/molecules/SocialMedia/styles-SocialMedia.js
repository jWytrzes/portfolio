import styled from 'styled-components';

export const StyledUl = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;

	@media (min-width: 992px) {
		position: absolute;
		bottom: 50px;
		right: 50px;
		flex-direction: column;
		width: fit-content;
	}
`;
