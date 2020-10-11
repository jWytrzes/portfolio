import styled from 'styled-components';

const ResumeTitle = styled.p`
	margin: 0 0 20px;
	font-size: 2rem;
	color: ${({ theme }) => theme.accent};
	line-height: 1.2;
	letter-spacing: 0.16rem;
	text-transform: uppercase;
	font-weight: 600;
`;

export default ResumeTitle;
