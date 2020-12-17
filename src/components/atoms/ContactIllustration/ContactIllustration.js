import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { StyledWrapper } from './styles-ContactIllustration';

const ContactIllustration = () => {
	const wrapper = useRef(null);

	useEffect(() => {
		const [elements] = wrapper.current.children;
		const bubbleMessage = elements.getElementById('bubbleMessage');

		gsap.set(bubbleMessage, { transformOrigin: '50% 50%' });
		gsap.fromTo(
			bubbleMessage,
			{ scale: 0.8, rotate: '5deg' },
			{
				scale: 1,
				rotate: '-10deg',
				repeat: -1,
				duration: 0.5,
				yoyo: true,
				repeatDelay: 1,
				ease: 'power3.inOut',
			},
		);
	}, []);

	return (
		<StyledWrapper ref={wrapper} className="wrapper">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={381}
				height={381}
				viewBox="0 0 381 381"
			>
				<defs>
					<clipPath id="prefix__a">
						<path
							transform="translate(.324 .489)"
							fill="#c72424"
							opacity={0.6}
							d="M0 0h313v296H0z"
						/>
					</clipPath>
					<clipPath id="prefix__b">
						<path
							d="M0-666.665h441.149v441.149H0z"
							transform="translate(0 666.665)"
						/>
					</clipPath>
				</defs>
				<g transform="translate(-1000 -4671.813)">
					<circle
						cx={190.5}
						cy={190.5}
						r={190.5}
						transform="translate(1000 4671.813)"
						fill="#fff"
						opacity={0.5}
					/>
					<g
						transform="translate(1033.676 4714.324)"
						clipPath="url(#prefix__a)"
					>
						<g
							clipPath="url(#prefix__b)"
							transform="translate(-66.808 -76.604)"
						>
							<path
								d="M224.652 77.074a147.774 147.774 0 01147.773 147.773 147.774 147.774 0 01-147.773 147.775A147.775 147.775 0 0176.879 224.846 147.773 147.773 0 01224.652 77.074"
								fill="#f6f5f6"
								fillRule="evenodd"
							/>
							<g id="bubbleMessage">
								<g transform="translate(110.761 140.354)" fill="#08bdba">
									<path
										d="M72.42 16.054A16.063 16.063 0 0056.366 0H16.054A16.063 16.063 0 000 16.054v16.948a16.062 16.062 0 0016.054 16.059h13.521L39.141 63.2s2.435 3.628 4.866 3.253c2.809-.435 2.366-5.192 2.366-5.192l.614-12.2h9.379A16.062 16.062 0 0072.42 33.002z"
										fillRule="evenodd"
									/>
									<rect
										width={168}
										height={49}
										rx={16}
										transform="translate(.371 -.261)"
									/>
								</g>
								<text
									transform="translate(136.132 171.093)"
									fill="#fff"
									fontSize={18}
									fontFamily="Montserrat-SemiBold, Montserrat"
									fontWeight={600}
								>
									<tspan x={0} y={0}>
										{'Get in touch!'}
									</tspan>
								</text>
							</g>
						</g>
						<g
							clipPath="url(#prefix__b)"
							transform="translate(-66.808 -76.604)"
						>
							<path
								d="M338.808 248.77s-21.284-10.247-7.566-22.987-13.8-21.77-5.945-34.8 17.013-7.047 18.5-15.62-9.487-15.132-2.406-27.641 15.324-17.932 25.56-16.338-3.1 26.914 7.393 31.959 9.064 21.232-6.968 35.308 9.674 23.046-5.412 32.755-23.156 17.364-23.156 17.364"
								fill="#08bdba"
								fillRule="evenodd"
							/>
							<path
								d="M318.901 275.571s14.906-13.981 3.157-19.735 7.993-20.611.626-28.282-13.6-.456-15.67-6.57.346-14.857-4.313-23.786c-6.082-11.653-17.058-11.5-23.628-3.175-5.336 6.762 10.941 19.735 3.591 26.622s-4.479 18.83 9.161 24.935-4.739 20.39 7.706 23.436 19.369 6.555 19.369 6.555"
								fill="#08bdba"
								fillRule="evenodd"
							/>
							<path
								d="M360.104 149.146l.269.092.244.146.208.192.166.232.111.261.056.279v.285l-.063.277-.165.49-.163.489-.164.49-.161.491-.159.49-.158.492-.157.492-.155.492-.154.493-.154.494-.152.494-.149.495-.149.5-.148.5-.146.5-.146.5-.145.5-.143.5-.141.5-.141.5-.139.5-.139.5-.137.5-.137.5-.134.5-.134.5-.133.5-.131.5-.131.5-.129.5-.129.506-.128.506-.127.5-.126.506-.125.506-.124.507-.123.507-.123.508-.122.508-.119.508-.121.508-.119.51-.118.508-.118.51-.116.51-.116.51-.115.511-.115.511-.114.512-.113.512-.225 1.024-.221 1.024-.221 1.026-.219 1.034-.214 1.028-.214 1.028-.211 1.029-.21 1.031-.207 1.031-.204 1.032-.206 1.031-.2 1.031-.2 1.032-.2 1.032-.2 1.032-.4 2.065-.4 2.065-.4 2.065-.4 2.064-.4 2.063-.2 1.03-.2 1.03-.2 1.03-.2 1.027-.2 1.029-.206 1.026-.206 1.026-.208 1.025-.21 1.023-.212 1.023-.213 1.022-.215 1.019-.217 1.02-.22 1.016-.611 2.807-.614 2.806-.615 2.807-.619 2.807-.618 2.806-.619 2.807-1.243 5.613-1.244 5.615-.622 2.807-.62 2.808-.621 2.808-.618 2.807-.617 2.809-.615 2.807-.613 2.81-.61 2.809-.305 1.4-.3 1.406-.3 1.4-.3 1.4-.3 1.4-.3 1.405-.3 1.406-.3 1.406-.3 1.4-.3 1.406-.295 1.406-.294 1.406-.292 1.406-.291 1.405-.29 1.406-.289 1.406-.287 1.406-.286 1.406-.284 1.406-.284 1.407-.281 1.406-.279 1.406-.28 1.407-.276 1.406-.275 1.407-.274 1.408-.272 1.406-.27 1.409-.082.272-.138.249-.186.215-.226.172-.258.121-.277.064-.284.006-.281-.055-.261-.109-.233-.162-.195-.208-.147-.243-.093-.268-.035-.282.024-.284.27-1.409.273-1.411.274-1.41.275-1.411.277-1.41.28-1.41.281-1.41.281-1.41.284-1.408.284-1.409.289-1.41.287-1.408.289-1.409.291-1.408.292-1.407.293-1.409.294-1.408.295-1.407.3-1.407.3-1.407.3-1.407.3-1.407.3-1.406.3-1.407.3-1.406.3-1.406.305-1.406.3-1.407.611-2.811.614-2.812.615-2.81.618-2.809.619-2.81.619-2.809.621-2.809.621-2.807 1.245-5.616 1.242-5.612.62-2.806.619-2.806.617-2.8.615-2.8.613-2.8.61-2.8.219-1.012.216-1.013.214-1.015.211-1.016.211-1.016.208-1.02.206-1.019.206-1.022.2-1.024.2-1.023.2-1.025.2-1.027.2-1.028.2-1.027.4-2.06.4-2.062.4-2.065.4-2.067.4-2.067.2-1.036.2-1.035.2-1.034.206-1.035.2-1.035.206-1.034.209-1.035.21-1.035.213-1.034.214-1.032.216-1.034.218-1.033.221-1.032.231-1.028.225-1.03.114-.516.115-.514.116-.516.116-.513.117-.514.117-.514.118-.514.118-.513.121-.513.122-.514.121-.513.123-.512.124-.513.124-.512.125-.513.126-.511.128-.512.13-.507.129-.509.13-.511.132-.51.131-.508.134-.509.134-.509.134-.508.137-.508.139-.508.139-.506.14-.507.141-.506.142-.506.144-.5.145-.506.146-.5.146-.5.149-.5.149-.5.15-.5.154-.5.154-.5.154-.5.157-.5.157-.5.16-.5.161-.5.161-.5.165-.5.164-.5.168-.5.166-.494.119-.259.17-.228.214-.208.249-.139.27-.084.284-.027z"
								fill="#095150"
								fillRule="evenodd"
							/>
							<path
								d="M291.979 201.09l.234.042.221.085.2.122.182.151.15.184.116.211.148.331.149.333.3.667.293.669.291.671.289.673.287.675.286.677.283.679.281.68.28.683.278.684.276.686.275.687.274.688.271.69.27.692.269.693.266.694.266.7.265.7.264.7.261.7.26.7.26.7.259.7.258.7.256.7.256.7.255.7.254.7.253.7.252.7.251.706.251.707.5 1.413.5 1.413.5 1.415.494 1.413.48 1.429.985 2.822.492 1.408.492 1.405.493 1.4.494 1.4.248.7.248.7.249.7.249.694.25.693.251.693.251.689.251.69.7 1.91.7 1.91.7 1.911.7 1.912 1.413 3.82 1.408 3.821 1.41 3.825 1.408 3.824 1.408 3.821.7 1.915.7 1.915.7 1.915.7 1.916.7 1.916.7 1.917.7 1.918.7 1.918.693 1.92.692 1.921.69 1.922.689 1.921.686 1.924.683 1.924.682 1.925.34.963.339.964.339.963.338.964.337.963.336.964.058.23.017.236-.024.236-.064.229-.1.213-.138.193-.171.165-.195.133-.216.1-.23.058-.237.018-.235-.023-.229-.065-.214-.1-.192-.139-.166-.169-.133-.2-.1-.216-.335-.963-.34-.965-.337-.962-.338-.962-.338-.961-.339-.962-.68-1.923-.682-1.922-.686-1.917-.686-1.92-.689-1.919-.692-1.918-.693-1.917-.7-1.916-.7-1.915-.7-1.915-.7-1.915-.7-1.914-.7-1.915-.7-1.913-.7-1.914-1.4-3.824-1.409-3.825-1.408-3.824-1.409-3.822-1.407-3.823-.707-1.912-.7-1.912-.7-1.912-.7-1.912-.252-.693-.252-.693-.251-.7-.251-.7-.25-.7-.251-.7-.248-.7-.249-.7-.5-1.4-.495-1.406-.493-1.408-.492-1.409-.986-2.823-.492-1.412-.495-1.413-.489-1.407-.5-1.41-.5-1.41-.25-.7-.251-.7-.251-.7-.252-.7-.252-.7-.253-.7-.254-.7-.255-.7-.256-.7-.258-.7-.258-.7-.259-.694-.26-.693-.257-.693-.262-.691-.265-.689-.261-.687-.266-.687-.267-.685-.269-.683-.274-.678-.272-.679-.273-.683-.279-.677-.273-.675-.279-.673-.28-.671-.282-.668-.286-.667-.285-.664-.287-.662-.289-.659-.291-.658-.148-.327-.147-.328-.078-.224-.038-.234v-.237l.052-.234.085-.221.126-.204.155-.179.184-.15.202-.116.224-.078.235-.037z"
								fill="#095150"
								fillRule="evenodd"
							/>
							<path
								d="M346.468 295.101h-53.765v29.74c0 9.446 12.262 22.556 12.262 22.556l28.286.594s13.217-13.3 13.217-23.15z"
								fill="#dcbcd4"
								fillRule="evenodd"
							/>
							<g>
								<path
									d="M198.659 324.52h87.1v8.512h-87.1z"
									fill="#8bdedc"
									fillRule="evenodd"
								/>
								<path
									d="M239.533 331.353l-10.118-94.361-103.789 7.23 16.112 87.136z"
									fill="#8bdedc"
									fillRule="evenodd"
								/>
								<path
									d="M232.98 332.792l-9.629-95.715-103.352 7.41 15.629 88.379z"
									fill="#08bdba"
									fillRule="evenodd"
								/>
								<path
									d="M166.892 280.579c.817-1.822 2.812-3.11 4.995-4.461s4.571-2.749 6.817-2.545c2.23.2 4.319 2.011 5.7 4.005 1.382 2.011 2.058 4.225 3.079 6.566 1.021 2.325 2.387 4.775 1.9 6.754-.471 1.963-2.8 3.456-4.854 5.293s-3.862 4.022-5.872 4.194c-2.008.189-4.257-1.617-6.582-2.905s-4.759-2.042-5.654-3.692-.272-4.162-.126-6.597-.22-4.792.597-6.612z"
									fill="#8bdedc"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</StyledWrapper>
	);
};

export default ContactIllustration;