import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppAppBar, Features, Footer, Hero } from './components/landingpage';
import { useEffect } from 'react';
import { asyncCurrentAdmin, asyncHomepage } from './store/Actions/adminActions';
import { useDispatch } from 'react-redux';

export default function LandingPage() {
	const dispatch = useDispatch();
	const [mode, setMode] = React.useState('dark');
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
		// localStorage.setItem('mode', mode);
	};
	useEffect(() => {
		localStorage.setItem('mode', mode);
	}, [toggleColorMode]);

	useEffect(() => {
		dispatch(asyncCurrentAdmin());
	}, []);
	

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
