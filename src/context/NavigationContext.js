import React, { useState } from 'react';

const NavigationContext = React.createContext({ activeSection: '#' });

const NavigationContextProvider = ({ children }) => {
	const [activeSection, setActiveSection] = useState('#');

	return (
		<NavigationContext.Provider
			value={{
				activeSection,
				setActiveSection,
			}}
		>
			{children}
		</NavigationContext.Provider>
	);
};

export default NavigationContext;
export { NavigationContextProvider };
