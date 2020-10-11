import styled from 'styled-components';

export const StyledResume = styled.section`
	background-color: ${({ theme }) => theme.base2};
`;

export const StyledInner = styled.div`
	margin-top: 40px;

	@media (min-width: 768px) {
		display: flex;
	}

	@media (min-width: 992px) {
		margin-top: 60px;
	}
`;

export const StyledList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const StyledBoxWrapper = styled.div`
	margin: 0 0 3.5rem;
`;

export const StyledLangs = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

export const StyledInnerColumn = styled.div`
	@media (min-width: 768px) {
		width: 45%;
		flex: 0 0 45%;

		&:first-of-type {
			margin-right: 5%;
		}

		&:last-of-type {
			margin-left: 5%;
		}
	}
`;
