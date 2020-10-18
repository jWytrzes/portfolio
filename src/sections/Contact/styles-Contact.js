import styled from 'styled-components';
import mobileFooter from '../../images/footer-mobile.svg';
import desktopFooter from '../../images/footer-desktop.svg';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';

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

export const StyledA = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.textPrimary};
	font-weight: 600;
	display: inline-flex;
	position: relative;
	transition: color 0.3s ease-out;
	line-height: 1.2;

	span {
		position: relative;
		z-index: 9;
	}

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.accentSecondary};
		bottom: 0;
		left: 0;
		z-index: 0;
		transform: translateY(24%) scaleY(0.42);
		transition: transform 0.3s ease-out;
	}

	&:hover {
		color: ${({ theme }) => theme.accentDarker};

		&::before {
			transform: translateY(0%) scaleY(1);
		}
	}
`;

export const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: 576px;
	margin: 0 auto;
`;

export const StyledButton = styled(Button)`
	margin-left: auto;
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

export const StyledRequired = styled.span`
	color: #ff0000;
`;
