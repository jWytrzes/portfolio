import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import { ReactComponent as Illustration404 } from '../images/404-illustration.svg';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import SocialMedia from '../components/molecules/SocialMedia/SocialMedia';

const StyledWrapper = styled.div`
	background-color: ${({ theme }) => theme.accent};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

const StyledIllustration = styled(Illustration404)`
	max-width: 750px;
	width: 100%;
	margin: 5% auto auto;
`;

const Page404 = () => {
	return (
		<Layout>
			<StyledWrapper>
				<StyledIllustration aria-label="Error 404. Page not found." />
				<ul>
					<Link to="/">
						<HomeIcon />
					</Link>
					<SocialMedia />
				</ul>
			</StyledWrapper>
		</Layout>
	);
};

export default Page404;
