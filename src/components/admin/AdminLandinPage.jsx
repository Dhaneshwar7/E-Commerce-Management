import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles';
import { Features, Footer, Hero, LinearBg } from '../landingpage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AdminLandingPage() {
	const [mount, setMount] = useState(false);
	const dispatch = useDispatch();
	const [mode, setMode] = React.useState('dark');
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	};
	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<>
			<CssBaseline />
			<Hero />
			<Box sx={{ bgcolor: 'background.default' }}>
			<LinearBg />
				<Features />
				<Divider />
				<Divider />
				<Footer />
			</Box>
		</>
	);
}
