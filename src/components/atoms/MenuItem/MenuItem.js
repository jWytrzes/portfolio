import React from 'react';
import { StyledLi, StyledLink } from './styles-MenuItem';

const MenuItem = ({ item, ...props }) => {
	return (
		<StyledLi {...props}>
			<StyledLink to={item.link}> {item.text} </StyledLink>
		</StyledLi>
	);
};

export default MenuItem;
