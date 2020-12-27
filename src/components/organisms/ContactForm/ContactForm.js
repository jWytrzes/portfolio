import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import FormGroup from '../../molecules/FormGroup/FormGroup';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import {
	StyledForm,
	StyledButton,
	StyledRequired,
	StyledErrorMessage,
} from './styles-ContactForm';

const ContactForm = () => {
	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
			)
			.join('&');
	};

	const handleSubmit = (values, actions) => {
		console.log(values);
		// fetch('/', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		// 	body: encode({ 'form-name': 'contact', ...values }),
		// })
		// 	.then(() => {
		// 		alert('Success');
		// 		actions.resetForm();
		// 	})
		// 	.catch(() => {
		// 		alert('Error');
		// 	})
		// 	.finally(() => actions.setSubmitting(false));
	};

	const validate = (values) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const errors = {};
		if (!values.name) {
			errors.name = 'Name is required';
		}
		if (!values.email || !emailRegex.test(values.email)) {
			errors.email = 'Valid e-mail is required';
		}
		if (!values.message) {
			errors.message = 'Message is required';
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				message: '',
			}}
			onSubmit={handleSubmit}
			validate={validate}
		>
			{({ errors, touched }) => (
				<StyledForm
					method="post"
					netlify-honeypot="bot-field"
					data-netlify="true"
					name="contact"
				>
					<input type="hidden" name="bot-field" />
					<input type="hidden" name="form-name" value="contact" />
					<FormGroup>
						<Input type="text" id="name" name="name" as={Field} />
						<label htmlFor="name">
							Name <StyledRequired>*</StyledRequired>
						</label>
						<StyledErrorMessage>
							<ErrorMessage name="name" />
						</StyledErrorMessage>
					</FormGroup>
					<FormGroup>
						<Input
							type="email"
							id="email"
							placeholder="your@email.com"
							name="email"
							as={Field}
						/>
						<label htmlFor="email">
							E-mail <StyledRequired>*</StyledRequired>
						</label>
						<StyledErrorMessage>
							<ErrorMessage name="email" />
						</StyledErrorMessage>
					</FormGroup>
					<FormGroup>
						<Textarea
							name="message"
							id="message"
							as={Field}
							component="textarea"
						></Textarea>
						<label htmlFor="message">
							Message <StyledRequired>*</StyledRequired>
						</label>
						<StyledErrorMessage>
							<ErrorMessage name="message" />
						</StyledErrorMessage>
					</FormGroup>
					<StyledButton secondary type="submit">
						Send message
					</StyledButton>
				</StyledForm>
			)}
		</Formik>
	);
};

export default ContactForm;
