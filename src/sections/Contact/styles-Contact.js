import styled from 'styled-components';
import mobileFooter from '../../images/footer-mobile.svg';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';

export const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.accent} url(${mobileFooter}) no-repeat
		top/cover;
	color: ${({ theme }) => theme.base};
`;

export const StyledInner = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledLeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledRightColumn = styled.div``;

export const StyledParagraph = styled(Paragraph)`
	text-align: center;
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
`;

export const StyledButton = styled(Button)`
	margin-left: auto;
`;

export const StyledAttribution = styled.a`
	color: ${({ theme }) => theme.base};
	text-decoration: none;
	text-align: center;
	margin-top: 5rem;
	margin-bottom: -2.5rem;
`;

export const StyledRequired = styled.span`
	color: #ff0000;
`;
