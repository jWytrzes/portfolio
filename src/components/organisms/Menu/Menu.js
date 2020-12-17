import React, { useState, forwardRef } from 'react';
import BurgerButton from '../../atoms/BurgerButton/BurgerButton';
import Navigation from '../../molecules/Navigation/Navigation';
import { StyledWrapper } from './styles-Menu';

const Menu = forwardRef((props, ref) => {
	const [isMenuActive, setIsMenuActive] = useState(false);

	const toggleMenu = (action = !isMenuActive) => {
		setIsMenuActive(action);
	};

	return (
		<StyledWrapper {...props} ref={ref}>
			<BurgerButton active={isMenuActive} onClick={() => toggleMenu()} />
			<Navigation active={isMenuActive} toggleMenu={toggleMenu} />
		</StyledWrapper>
	);
});

export default Menu;
