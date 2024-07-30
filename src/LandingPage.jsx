import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
	AppAppBar,
	Features,
	Footer,
	Hero,
	LinearBg,
} from './components/landingpage';
import { useEffect, useState } from 'react';
import { asyncCurrentAdmin, asyncHomepage } from './store/Actions/adminActions';
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts } from './components/products/index';
import { NavBarBox } from './components/admin';

export default function LandingPage() {
	const [mount, setMount] = useState(false);
	const dispatch = useDispatch();
	const [mode, setMode] = React.useState('dark');
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	};
	const { allProducts } = useSelector(state => state.adminReducer);
	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<>
			<CssBaseline />
			{/* <LinearBg/> */}
			<Box sx={{ bgcolor: 'background.default' }}>
				{/* <div className="">
					<NavBarBox className="pt-20" mode={mode} />
				</div> */}
				<AllProducts mode={mode} allProducts={allProducts} />

				<Divider />
				<Footer />
			</Box>
		</>
	);
}
