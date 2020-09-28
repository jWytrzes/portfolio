import React from 'react';
import { StyledLi, StyledLink } from './styles-MenuItem';

const MenuItem = ({ item }) => {
	return (
		<StyledLi>
			<StyledLink to={item.link}> {item.text} </StyledLink>
		</StyledLi>
	);
};

export default MenuItem;
