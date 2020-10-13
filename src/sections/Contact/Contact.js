import React from 'react';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import contactIllustration from '../../images/contact-illustration.svg';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Button from '../../components/atoms/Button/Button';

const Contact = () => {
	return (
		<footer id="contact">
			<SectionTemplate>
				<div>
					<div>
						<img src={contactIllustration} alt="" />
						<Paragraph>
							Use the form or write me an e-mail:{' '}
							<a href="mailto:joannawytrzes@gmail.com">
								joannawytrzes@gmail.com
							</a>
						</Paragraph>
					</div>
					<div>
						<form>
							<div>
								<label htmlFor="name">Name</label>
								<input type="text" id="name" />
							</div>

							<div>
								<label htmlFor="email">
									E-mail <span>*</span>{' '}
								</label>
								<input type="text" id="email" />
							</div>
							<div>
								<label htmlFor="message">Message</label>
								<textarea name="message" id="message"></textarea>
							</div>
							<Button secondary> Send message </Button>
						</form>
					</div>
				</div>
			</SectionTemplate>
			<div>
				<a href="https://www.freepik.com/vectors/technology">
					Technology vector created by freepik - www.freepik.com
				</a>
			</div>
		</footer>
	);
};

export default Contact;
