import React, { useState } from 'react';

const NavigationContext = React.createContext({ activeSection: '#' });

const NavigationContextProvider = ({ children }) => {
	const [state, setState] = useState({});

	return (
		<NavigationContext.Provider value={[state, setState]}>
			{children}
		</NavigationContext.Provider>
	);
};

export default NavigationContext;
export { NavigationContextProvider };
