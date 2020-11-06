import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import contactIllustration from '../../images/contact-illustration.svg';
import ContactForm from '../../components/organisms/ContactForm/ContactForm';
import {
	StyledFooter,
	StyledInner,
	StyledLeftColumn,
	StyledRightColumn,
	StyledParagraph,
	StyledA,
	StyledAttribution,
} from './styles-Contact';

const Contact = () => {
	return (
		<StyledFooter id="contact">
			<SectionTemplate id="contactInner">
				<StyledInner>
					<StyledLeftColumn>
						<img src={contactIllustration} alt="" />
						<StyledParagraph>
							Use the form or write me an e-mail: <br />
							<StyledA href="mailto:joannawytrzes@gmail.com" dark>
								joannawytrzes@gmail.com
							</StyledA>
						</StyledParagraph>
					</StyledLeftColumn>
					<StyledRightColumn>
						<ContactForm />
					</StyledRightColumn>
				</StyledInner>
			</SectionTemplate>
			<StyledAttribution
				href="https://www.freepik.com/vectors/technology"
				target="_blank"
			>
				Technology vector created by freepik - www.freepik.com
			</StyledAttribution>
		</StyledFooter>
	);
};

export default Contact;
