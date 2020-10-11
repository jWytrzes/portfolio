import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledArticle = styled.article`
	background-color: ${({ theme }) => theme.base};
	position: relative;
	margin-bottom: 30px;
	box-shadow: 0 50px 30px -40px ${({ theme }) => theme.shadow};
	border-radius: 11px;
	z-index: 10;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;
		max-width: 90%;
		margin: 0 auto 50px;
	}

	@media (min-width: 1440px) {
		max-width: 100%;
	}
`;

export const StyledThumbnailWrapper = styled.div`
	border-radius: 11px;
	overflow: hidden;

	@media (min-width: 768px) {
		width: 36.5%;
		flex: 0 0 36.5%;
		display: flex;
	}
`;

export const StyledThumbnail = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;

	@media (min-width: 768px) {
		object-fit: cover;
		object-position: top left;
	}
`;

export const StyledContentWrapper = styled.div`
	position: relative;
	z-index: 10;
	padding: 20px;

	@media (min-width: 992px) {
		padding: 30px;
	}
`;

export const StyledLabelsWrapper = styled.div`
	margin-bottom: 10px;
`;

export const StyledP = styled.p`
	margin-top: 0;
	line-height: 1.68;

	@media (min-width: 1200px) {
		font-size: 1.6rem;
		margin-bottom: 2rem;
	}
`;

export const StyledButton = styled(Button)`
	padding: 8px 15px;
	min-width: 90px;
	text-decoration: none;
`;

export const StyledFooter = styled.footer`
	display: flex;

	${StyledButton} {
		margin-right: 20px;
	}
`;

export const StyledIcon = styled.svg`
	height: 16px;
`;

export const StyledLinkText = styled.span`
	margin-left: 10px;
`;
