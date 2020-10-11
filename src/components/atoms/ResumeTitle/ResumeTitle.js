import styled from 'styled-components';

const ResumeTitle = styled.p`
	margin: 0 0 2rem;
	font-size: 2rem;
	color: ${({ theme }) => theme.accent};
	line-height: 1.2;
	letter-spacing: 0.16rem;
	text-transform: uppercase;
	font-weight: 600;

	@media (min-width: 992px) {
		font-size: 2.4rem;
		margin: 0 0 3rem;
	}
`;

export default ResumeTitle;
