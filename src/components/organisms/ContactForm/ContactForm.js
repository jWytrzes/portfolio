import React, { useRef } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import gsap from 'gsap';
import FormGroup from '../../molecules/FormGroup/FormGroup';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Textarea/Textarea';
import MessageSentInfo from '../../molecules/MessageSentInfo/MessageSentInfo';
import {
	StyledForm,
	StyledButton,
	StyledRequired,
	StyledErrorMessage,
	StyledLoading,
	StyledButtonWrapper,
} from './styles-ContactForm';
import loader from '../../../images/loader.png';

const ContactForm = () => {
	const form = useRef(null);
	const message = useRef(null);

	const hiddenCommon = {
		autoAlpha: 0,
		visibility: 'hidden',
		display: 'none',
		duration: 0.25,
		ease: 'power3.in',
	};

	const visibleCommon = {
		autoAlpha: 1,
		visibility: 'visible',
		display: 'flex',
		delay: 0.25,
		scale: 1,
		duration: 0.3,
		ease: 'power3.out',
	};

	const showInfo = () => {
		gsap.to(form.current, {
			...hiddenCommon,
		});
		gsap.to(message.current, {
			...visibleCommon,
			scale: 1,
		});
	};

	const hideInfo = () => {
		gsap.to(message.current, {
			...hiddenCommon,
			scale: 0,
		});
		gsap.to(form.current, {
			...visibleCommon,
		});
	};

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
			)
			.join('&');
	};

	const handleSubmit = (values, actions) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...values }),
		})
			.then(() => {
				showInfo();
				actions.resetForm();
			})
			.catch((err) => {
				console.log('Error: ', err);
			})
			.finally(() => actions.setSubmitting(false));
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
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
				}}
				onSubmit={handleSubmit}
				validate={validate}
			>
				{({ isSubmitting }) => (
					<StyledForm data-netlify={true} name="contact" ref={form}>
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
						<StyledButtonWrapper>
							{isSubmitting && <StyledLoading src={loader} alt="Loading" />}
							<StyledButton secondary type="submit">
								Send message
							</StyledButton>
						</StyledButtonWrapper>
					</StyledForm>
				)}
			</Formik>
			<MessageSentInfo ref={message} hideInfo={hideInfo} />
		</>
	);
};

export default ContactForm;
