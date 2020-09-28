import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 25px;
	flex: 1;
	display: flex;
	flex-direction: column;

	@media (min-width: 1250px) {
		max-width: 1250px;
		margin: 0 auto;
		padding: ${({ theme, smallPadding }) =>
			smallPadding ? '50px 0' : '100px 0'};
	}
`;