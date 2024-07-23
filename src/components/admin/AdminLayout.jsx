import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppAppBar, LinearBg } from '../landingpage';
import { blue } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncAllProduct,
	asyncCurrentAdmin,
} from '../../store/Actions/adminActions';

const AuthLayout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { products, isAuth, admin } = useSelector(state => state.adminReducer);

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
	// useEffect(() => {
	// 	if (!admin) {
	// 		dispatch(asyncCurrentAdmin());
	// 	} else {
	// 		if (!products || products.length <= 0) {
	// 			dispatch(asyncAllProduct());
	// 		}
	// 	}
	// 	// console.log("all products aajoa ek bar");
	// }, []);
	useEffect(() => {
		if (!isAuth) {
			dispatch(asyncCurrentAdmin());
		} else {
			navigate(window.location.pathname);
		}
	}, []);
	return (
		<>
			<LinearBg />
			<Outlet isScrolledDown={isScrolledDown} />
		</>
	);
};

export default AuthLayout;
