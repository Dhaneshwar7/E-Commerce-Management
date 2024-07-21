import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppAppBar, LinearBg } from '../landingpage';

const AuthLayout = () => {
	const [mode, setMode] = React.useState('light');
	const defaultTheme = createTheme({ palette: { mode } });
	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<LinearBg />
			<AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
			<h1>Auth loyout</h1>
			<Outlet />
		</ThemeProvider>
	);
};

export default AuthLayout;
