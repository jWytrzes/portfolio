import React from 'react';
import { StyledText, StyledA } from './styles-A';

const A = ({ children, dark, ...props }) => {
	return (
		<StyledA {...props} dark={dark}>
			<StyledText>{children}</StyledText>
		</StyledA>
	);
};

export default A;
