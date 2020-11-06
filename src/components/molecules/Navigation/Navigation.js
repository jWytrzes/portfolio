import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import { StyledNav, StyledUl } from './styles-Navigation';
import NavigationContext from '../../../context/NavigationContext';

const menuItems = [
	{ text: 'Home', link: '#' },
	{ text: 'Projects', link: '#projects' },
	{ text: 'About', link: '#about' },
	{ text: 'Resume', link: '#resume' },
	{ text: 'Contact', link: '#contact' },
];

const Navigation = ({ active, toggleMenu }) => {
	const context = useContext(NavigationContext);

	return (
		<StyledNav active={active}>
			<StyledUl>
				{menuItems.map((item) => (
					<MenuItem
						item={item}
						key={item.link}
						onClick={() => toggleMenu(false)}
						active={context.activeSection === item.link}
					/>
				))}
			</StyledUl>
		</StyledNav>
	);
};

Navigation.defaultProps = {
	active: false,
};

Navigation.propTypes = {
	active: PropTypes.bool,
};

export default Navigation;
