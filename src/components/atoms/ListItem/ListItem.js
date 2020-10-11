import styled from 'styled-components';

const ListItem = styled.li`
	padding-left: 32px;
	margin-bottom: 1.2rem;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		width: 7px;
		height: 7px;
		background-color: ${({ theme }) => theme.accent};
		transform: rotate(45deg) translateY(-50%);
		left: 0;
		top: 50%;
	}
`;

export default ListItem;
