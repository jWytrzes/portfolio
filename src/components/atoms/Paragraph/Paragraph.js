import styled from 'styled-components';

const Paragraph = styled.p`
	line-height: 1.8;
	margin-bottom: 3rem;
	margin-top: ${({ noTopMargin }) => (noTopMargin ? 0 : '3rem')};
`;

export default Paragraph;
