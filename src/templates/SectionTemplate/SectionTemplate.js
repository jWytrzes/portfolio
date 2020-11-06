import React, { useContext, useRef, useEffect } from 'react';
import NavigationContext from '../../context/NavigationContext';
import { StyledWrapper } from './styles-SectionTemplate';

const SectionTemplate = ({ smallPadding, verticalCenter, children, id }) => {
	const [state, setState] = useContext(NavigationContext);
	const ref = useRef();

	useEffect(() => {
		const pageHeight = window.innerHeight;
		const observerMargin = Math.floor(pageHeight / 2);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.target.id !== state.activeSection && entry.isIntersecting) {
						setState((state) => ({
							...state,
							activeSection: entry.target.id.replace('Inner', ''),
						}));
					}
				});
			},
			{
				rootMargin: `-${
					pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
				}px 0px -${observerMargin}px 0px`,
			},
		);

		const current = ref.current;
		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
		};
	}, [ref, setState, state]);

	return (
		<StyledWrapper
			smallPadding={smallPadding}
			verticalCenter={verticalCenter}
			ref={ref}
			id={id}
		>
			{children}
		</StyledWrapper>
	);
};

export default SectionTemplate;
