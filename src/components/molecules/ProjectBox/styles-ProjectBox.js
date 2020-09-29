import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledArticle = styled.article`
	background-color: ${({ theme }) => theme.base};
	position: relative;
	margin-bottom: 30px;
	box-shadow: 0 30px 30px -25px ${({ theme }) => theme.shadow};
	border-radius: 11px;
`;

export const StyledThumbnailWrapper = styled.div`
	border-radius: 11px;
	overflow: hidden;
`;

export const StyledThumbnail = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
`;

export const StyledContentWrapper = styled.div`
	position: relative;
	z-index: 10;
	padding: 20px;
`;

export const StyledLabelsWrapper = styled.div`
	margin-bottom: 15px;
`;

export const StyledButton = styled(Button)`
	padding: 11px 35px;
`;

export const StyledFooter = styled.footer`
	${StyledButton} {
		margin-right: 20px;
	}
`;

export const StyledSvg = styled.svg`
	height: 16px;
`;
