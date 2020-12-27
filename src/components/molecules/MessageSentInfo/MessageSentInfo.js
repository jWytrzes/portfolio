import React, { forwardRef } from 'react';
import success from '../../../images/success.svg';
import Button from '../../atoms/Button/Button';
import { StyledWrapper, StyledText } from './styles-MessageSentInfo';

const MessageSentInfo = forwardRef((props, ref) => {
	return (
		<StyledWrapper {...props} ref={ref}>
			<img src={success} alt="" />
			<StyledText> Your message has been sent! </StyledText>
			<Button secondary onClick={props.hideInfo}>
				Send another one
			</Button>
		</StyledWrapper>
	);
});

export default MessageSentInfo;
