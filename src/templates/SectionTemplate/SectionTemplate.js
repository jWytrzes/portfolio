import React, { useContext } from 'react';
import NavigationContext from '../../context/NavigationContext';
import useOnScreen from '../../hooks/useOnScreen';
import { StyledWrapper } from './styles-SectionTemplate';

const SectionTemplate = ({ smallPadding, verticalCenter, children }) => {
	const context = useContext(NavigationContext);
	const [sectionRef, isVisible] = useOnScreen({ rootMargin: '-50%' });

	return (
		<StyledWrapper
			smallPadding={smallPadding}
			verticalCenter={verticalCenter}
			ref={sectionRef}
			isVisible={isVisible}
		>
			{children}
		</StyledWrapper>
	);
};

export default SectionTemplate;
