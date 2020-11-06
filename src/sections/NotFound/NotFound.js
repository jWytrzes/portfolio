import React from 'react';
import Background from '../../components/atoms/Background/Background';
import { ReactComponent as HomeIcon } from '../../images/home.svg';
import {
	StyledWrapper,
	StyledInner,
	StyledIllustration,
	StyledLinks,
	StyledLink,
	StyledSocialMedia,
} from './styles-NotFound';

const NotFound = () => {
	return (
		<StyledWrapper>
			<Background />
			<StyledInner>
				<StyledIllustration aria-label="Error 404. Page not found." />
				<StyledLinks>
					<StyledLink to="/">
						<HomeIcon />
					</StyledLink>
					<StyledSocialMedia />
				</StyledLinks>
			</StyledInner>
		</StyledWrapper>
	);
};

export default NotFound;
