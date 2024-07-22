import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { asyncCurrentAdmin, asyncHomepage } from './store/Actions/adminActions';
import { AppAppBar, LinearBg } from '../src/components/landingpage';
import { blue } from '@mui/material/colors';

const Layout = () => {
	const dispatch = useDispatch();
	const { admin } = useSelector(state => state.adminReducer);
	const [isScrolledDown, setIsScrolledDown] = useState(false);

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
	useEffect(() => {
		let lastScroll = 0;
		let isScrolled = false;
		const handleScroll = () => {
			let currentScroll =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;
			let scrollDirection = currentScroll < lastScroll;
			let shouldToggle = isScrolled && scrollDirection;
			isScrolled = currentScroll > 100;
			lastScroll = currentScroll;
			setIsScrolledDown(scrollDirection);
		};
		window.addEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (!admin) {
			dispatch(asyncCurrentAdmin());
		}
	}, []);

	return (
		<div>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				<AppAppBar
					isScrolledDown={isScrolledDown}
					mode={mode}
					toggleColorMode={toggleColorMode}
				/>
				<Outlet mode={mode} toggleColorMode={toggleColorMode} />
			</ThemeProvider>
		</div>
	);
};

export default Layout;
