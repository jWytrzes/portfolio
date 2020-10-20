import styled from 'styled-components';
import mobileFooter from '../../images/footer-mobile.svg';
import desktopFooter from '../../images/footer-desktop.svg';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import A from '../../components/atoms/A/A';

export const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.accent} url(${mobileFooter}) no-repeat
		top/cover;
	color: ${({ theme }) => theme.base};
	position: relative;

	@media (min-width: 768px) {
		background-image: url(${desktopFooter});
	}
`;

export const StyledInner = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const StyledLeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	img {
		display: inline-flex;
		max-width: 90%;
		margin: auto;
	}

	@media (min-width: 768px) {
		flex: 0 0 50%;
		padding-right: 25px;
	}
`;

export const StyledRightColumn = styled.div`
	@media (min-width: 768px) {
		flex: 0 0 50%;
		display: flex;
		align-items: center;
		padding-left: 25px;
	}
`;

export const StyledParagraph = styled(Paragraph)`
	text-align: center;

	@media (min-width: 992px) {
		font-size: 1.8rem;
		margin-bottom: 0;
	}
`;

export const StyledA = styled(A)`
	font-weight: 600;
	line-height: 1.2;
`;

export const StyledAttribution = styled.a`
	color: ${({ theme }) => theme.base};
	text-decoration: none;
	text-align: center;
	width: 100%;
	padding: 0px 10px 20px;
	text-align: center;
	display: block;
	transition: color 0.2s ease-out;

	&:hover {
		color: ${({ theme }) => theme.textPrimary};
	}

	@media (min-width: 768px) {
		position: absolute;
		bottom: 10px;
		right: 10px;
		font-size: 1.4rem;
		width: fit-content;
		padding: 0;
	}
`;
