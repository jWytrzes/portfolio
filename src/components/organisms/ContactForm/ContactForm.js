import React from 'react';
import FormGroup from '../../molecules/FormGroup/FormGroup';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import { StyledForm, StyledButton, StyledRequired } from './styles-ContactForm';

const ContactForm = () => {
	return (
		<StyledForm
			method="post"
			netlify-honeypot="bot-field"
			data-netlify="true"
			name="contact"
		>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="contact" />
			<FormGroup>
				<Input type="text" id="name" name="name" />
				<label htmlFor="name">Name</label>
			</FormGroup>
			<FormGroup>
				<Input
					type="text"
					id="email"
					placeholder="your@email.com"
					name="email"
				/>
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
	);
};

export default ContactForm;
