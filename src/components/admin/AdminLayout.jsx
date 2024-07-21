import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppAppBar, LinearBg } from '../landingpage';
import { blue } from '@mui/material/colors';

const AuthLayout = () => {
	const [isScrolledDown, setIsScrolledDown] = useState({
		isScroll: false,
		isScrolllVaue: 0,
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
			setIsScrolledDown({
				isScroll: scrollDirection,
				isScrolllVaue: currentScroll,
			});
			// console.log(currentScroll);
		};
		window.addEventListener('scroll', handleScroll);
	}, []);
	return (
		<>
			<LinearBg />
			<Outlet
				isScrolledDown={isScrolledDown}
			/>
		</>
	);
};

export default AuthLayout;
