import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import H1 from '../../components/atoms/H1/H1';
import SocialMedia from '../../components/molecules/SocialMedia/SocialMedia';
import Menu from '../../components/organisms/Menu/Menu';
import SectionTemplate from '../../templates/SectionTemplate/SectionTemplate';
import { ReactComponent as ChevronsDown } from '../../images/chevrons-down.svg';
import Background from '../../components/atoms/Background/Background';
import {
	StyledHeader,
	StyledSmall,
	StyledHeroText,
	StyledScrollLink,
} from './styles-Hero';

const Hero = () => {
	const menuRef = useRef(null);
	const socialMediaRef = useRef(null);
	const smallTextRef = useRef(null);
	const smallText2Ref = useRef(null);
	const bigTextRef = useRef(null);
	const arrow = useRef(null);

	useEffect(() => {
		gsap.set(menuRef.current, { y: '-=100', autoAlpha: 0 });
		gsap.set(socialMediaRef.current, { x: '+=100', autoAlpha: 0 });
		gsap.set([smallTextRef.current, smallText2Ref.current], { autoAlpha: 0 });
		gsap.set(bigTextRef.current, { scale: 0, autoAlpha: 0 });
		gsap.set(arrow.current, { autoAlpha: 0 });

		const menuSMCommonOptions = {
			autoAlpha: 1,
			ease: 'expo.out',
			duration: 0.7,
			delay: 1.5,
		};
		gsap.to(menuRef.current, {
			y: 0,
			...menuSMCommonOptions,
		});
		gsap.to(socialMediaRef.current, {
			x: 0,
			...menuSMCommonOptions,
		});

		const textCommonOptions = {
			autoAlpha: 1,
			ease: 'expo.out',
		};
		gsap.to([smallTextRef.current, smallText2Ref.current], {
			duration: 1,
			stagger: 1,
			delay: 0.1,
			...textCommonOptions,
		});

		gsap.to(bigTextRef.current, {
			scale: 1,
			delay: 0.5,
			duration: 0.5,
			...textCommonOptions,
		});

		gsap.to(arrow.current, {
			delay: 1.8,
			duration: 2,
			...textCommonOptions,
		});
	}, []);

	return (
		<StyledHeader id="hero">
			<Background />
			<SectionTemplate smallPadding id="heroInner">
				<Menu ref={menuRef} className="hideBeforeAnimation" />
				<StyledHeroText>
					<StyledSmall ref={smallTextRef} className="hideBeforeAnimation">
						Hello, I am
					</StyledSmall>
					<H1 ref={bigTextRef} className="hideBeforeAnimation">
						Joanna <br />
						Wytrzęś
					</H1>
					<StyledSmall ref={smallText2Ref} className="hideBeforeAnimation">
						front-end developer
					</StyledSmall>
				</StyledHeroText>
				<StyledScrollLink to="#projects" ref={arrow}>
					<ChevronsDown />
				</StyledScrollLink>
				<SocialMedia ref={socialMediaRef} className="hideBeforeAnimation" />
			</SectionTemplate>
		</StyledHeader>
	);
};

export default Hero;
