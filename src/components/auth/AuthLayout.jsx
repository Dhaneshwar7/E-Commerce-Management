import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppAppBar, LinearBg } from '../landingpage';

const AuthLayout = () => {
	return (
		<>
			<LinearBg />
			<Outlet />
		</>
	);
};

export default AuthLayout;
