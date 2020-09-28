import React, { useState } from 'react';
import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Navigation from '../../molecules/Navigation/Navigation';
import { StyledWrapper } from './styles-Menu';

const Menu = () => {
	const [isMenuActive, setIsMenuActive] = useState(false);

	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive);
	};

	return (
		<StyledWrapper>
			<BurgerButton active={isMenuActive} onClick={toggleMenu} />
			<Navigation active={isMenuActive} />
		</StyledWrapper>
	);
};

export default Menu;
