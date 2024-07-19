import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppAppBar, Features, Footer, Hero } from './components/landingpage';
import { useEffect } from 'react';
import { ProductContext, useProductContext } from './utils/ProductReducer';

export default function LandingPage() {
	// const { state } = useProductContext();
	const { state } = React.useContext(ProductContext);
	console.log(state);
	const [mode, setMode] = React.useState('light');
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
		// localStorage.setItem('mode', mode);
	};
	useEffect(() => {
		localStorage.setItem('mode', mode);
	}, [toggleColorMode]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
			<Hero />
			<Box sx={{ bgcolor: 'background.default' }}>
				<Features />
				<Divider />
				<Divider />
				<Footer />
			</Box>
		</ThemeProvider>
	);
}
