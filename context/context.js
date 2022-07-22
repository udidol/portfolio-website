import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export default function	ThemeProvider({ children }) {
	const [theme, setTheme] = useState('light');

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	);
}