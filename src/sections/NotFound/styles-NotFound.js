import { Link } from 'gatsby';
import styled from 'styled-components';
import SocialMedia from '../../components/molecules/SocialMedia/SocialMedia';
import { ReactComponent as Illustration404 } from '../../images/404-illustration.svg';
import mobile404 from '../../images/404-mobile.svg';
import desktop404 from '../../images/404-desktop.svg';

export const StyledWrapper = styled.div`
	background: ${({ theme }) => theme.accent} url(${mobile404}) no-repeat
		top/cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;

	@media (min-width: 992px) {
		background-image: url(${desktop404});
	}
`;

export const StyledInner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const StyledIllustration = styled(Illustration404)`
	max-width: 750px;
	max-height: 50vh;
	width: 90%;
	margin: 5% auto;
`;

export const StyledSocialMedia = styled(SocialMedia)`
	position: relative;
	width: fit-content;

	@media (min-width: 992px) {
		flex-direction: row;
		bottom: unset;
		right: unset;

		li {
			margin-top: 0;
			margin-left: 48px;
		}
	}
`;

export const StyledLinks = styled.div`
	display: flex;
	align-items: center;
	margin-top: 50px;
	justify-content: center;
`;

export const StyledLink = styled(Link)`
	display: flex;

	svg path {
		transition: fill 0.3s ease-out;
	}

	&:hover {
		svg path {
			fill: ${({ theme }) => theme.textPrimary};
		}
	}

	@media (min-width: 992px) {
		padding: 5px;

		svg {
			width: 36px;
			height: 36px;
		}
	}
`;
