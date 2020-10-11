import styled from 'styled-components';

export const StyledAbout = styled.section`
	min-height: 100vh;
	display: flex;
`;

export const StyledTextWrapper = styled.div`
	@media (min-width: 768px) {
		max-width: 50%;
	}
`;

export const StyledImgWrapper = styled.div`
	max-width: 420px;
	width: 88%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	svg {
		width: 100%;
		height: auto;
	}

	@media (min-width: 768px) {
		flex: 0 0 45%;
		width: 45%;
		margin: auto 0;
	}
`;

export const StyledInnerWrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row-reverse;
	}
`;
