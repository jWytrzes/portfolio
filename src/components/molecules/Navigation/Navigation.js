import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import { StyledNav, StyledUl } from './styles-Navigation';
import NavigationContext from '../../../context/NavigationContext';

const menuItems = [
	{ text: 'Home', link: '#hero' },
	{ text: 'Projects', link: '#projects' },
	{ text: 'About', link: '#about' },
	{ text: 'Resume', link: '#resume' },
	{ text: 'Contact', link: '#contact' },
];

const Navigation = ({ active, toggleMenu }) => {
	const [state] = useContext(NavigationContext);
	const [activeSection, setActiveSection] = useState('#');

	useEffect(() => {
		setActiveSection(state.activeSection);
	}, [state]);

	return (
		<StyledNav active={active}>
			<StyledUl>
				{menuItems.map((item) => (
					<MenuItem
						item={item}
						key={item.link}
						onClick={() => toggleMenu(false)}
						active={`#${activeSection}` === item.link}
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
