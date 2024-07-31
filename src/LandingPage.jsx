import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {
	Footer,
	LinearBg,
} from './components/landingpage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts } from './components/products/index';

export default function LandingPage() {
	const [mount, setMount] = useState(false);
	const dispatch = useDispatch();
	const { allProducts } = useSelector(state => state.adminReducer);
	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<>
			<CssBaseline />
			<Box sx={{ bgcolor: 'background.default' }}>
			<LinearBg/>
				<AllProducts  allProducts={allProducts} />
				<Divider />
				<Footer />
			</Box>
		</>
	);
}
