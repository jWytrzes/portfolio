import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 15px;

	@media (min-width: 992px) {
		padding: 0;
		top: 25px;
	}
`;
