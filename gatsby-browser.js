import React from 'react';
import { NavigationContextProvider } from './src/context/NavigationContext';

export const wrapRootElement = ({ element }) => (
	<NavigationContextProvider>{element}</NavigationContextProvider>
);
