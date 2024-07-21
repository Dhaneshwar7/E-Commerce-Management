import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppAppBar, LinearBg } from '../landingpage';
import { blue } from '@mui/material/colors';

const AuthLayout = () => {
	const [mode, setMode] = React.useState('light');
	const defaultTheme = createTheme({ palette: { mode } });
	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	const theme = createTheme({
		palette: {
			// primary: '#e3f2fd',
			primary: {
				main: blue[500],
			},
			tonalOffset: 0.5,
		},
	});

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<LinearBg />
			<AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
			<Outlet />
		</ThemeProvider>
	);
};

export default AuthLayout;
