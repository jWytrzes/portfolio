import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import contactIllustration from '../../images/contact-illustration.svg';
import FormGroup from '../../components/molecules/FormGroup/FormGroup';
import Input from '../../components/atoms/Input/Input';
import Textarea from '../../components/atoms/Textarea/Textarea';
import {
	StyledFooter,
	StyledInner,
	StyledLeftColumn,
	StyledRightColumn,
	StyledParagraph,
	StyledA,
	StyledForm,
	StyledButton,
	StyledAttribution,
	StyledRequired,
} from './styles-Contact';

const Contact = () => {
	return (
		<StyledFooter id="contact">
			<SectionTemplate>
				<StyledInner>
					<StyledLeftColumn>
						<img src={contactIllustration} alt="" />
						<StyledParagraph>
							Use the form or write me an e-mail:{' '}
							<StyledA href="mailto:joannawytrzes@gmail.com">
								<span>joannawytrzes@gmail.com</span>
							</StyledA>
						</StyledParagraph>
					</StyledLeftColumn>
					<StyledRightColumn>
						<StyledForm>
							<FormGroup>
								<Input type="text" id="name" />
								<label htmlFor="name">Name</label>
							</FormGroup>

							<FormGroup>
								<Input type="text" id="email" placeholder="your@email.com" />
								<label htmlFor="email">
									E-mail <StyledRequired>*</StyledRequired>
								</label>
							</FormGroup>
							<FormGroup>
								<Textarea name="message" id="message"></Textarea>
								<label htmlFor="message">Message</label>
							</FormGroup>
							<StyledButton secondary> Send message </StyledButton>
						</StyledForm>
					</StyledRightColumn>
				</StyledInner>
				<StyledAttribution href="https://www.freepik.com/vectors/technology">
					Technology vector created by freepik - www.freepik.com
				</StyledAttribution>
			</SectionTemplate>
		</StyledFooter>
	);
};

export default Contact;
