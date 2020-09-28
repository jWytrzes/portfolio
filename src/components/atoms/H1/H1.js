import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 4.8rem;
	font-weight: 900;
	text-transform: uppercase;
	margin: 0;
	line-height: 1.2;

	@media (min-width: 360px) {
		font-size: 6rem;
	}

	@media (min-width: 992px) {
		font-size: 13rem;
	}
`;

export default H1;
