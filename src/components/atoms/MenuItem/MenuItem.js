import React from 'react';
import { StyledLi, StyledLink } from './styles-MenuItem';

const MenuItem = ({ item, active, ...props }) => {
	return (
		<StyledLi {...props}>
			<StyledLink to={item.link} active={active ? 1 : 0}>
				{item.text}
			</StyledLink>
		</StyledLi>
	);
};

export default MenuItem;
