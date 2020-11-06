import styled from 'styled-components';
import { ReactComponent as HeroBackground } from '../../../images/bcg-anim.svg';
import {
	blob1Wrapper,
	blob1,
	blob2,
	blob3Wrapper,
	blob3,
	blob4Wrapper,
	blob4,
} from './animations-Background';

const Background = styled(HeroBackground)`
	position: absolute;
	bottom: 0;
	right: 0;
	height: 100%;
	width: auto;
	min-width: 100%;
	z-index: 0;

	.bcg-anim_svg__blob1-wrapper {
		animation: ${blob1Wrapper} 15s infinite ease-in-out;
	}

	.bcg-anim_svg__blob1 {
		animation: ${blob1} 60s infinite ease-in;
	}

	.bcg-anim_svg__blob2 {
		animation: ${blob2} 20s infinite linear alternate;
	}

	.bcg-anim_svg__blob3-wrapper {
		animation: ${blob3Wrapper} 20s infinite linear;
	}

	.bcg-anim_svg__blob3 {
		animation: ${blob3} 20s infinite ease-in;
	}

	.bcg-anim_svg__blob4-wrapper {
		animation: ${blob4Wrapper} 20s infinite linear alternate-reverse;
	}

	.bcg-anim_svg__blob4 {
		animation: ${blob4} 20s infinite ease-in-out;
	}
`;

export default Background;
