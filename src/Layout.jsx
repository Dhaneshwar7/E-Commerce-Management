import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { asyncCurrentAdmin, asyncHomepage } from './store/Actions/adminActions';

const Layout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncCurrentAdmin());
	}, []);
	// console.log('helljeflo3ij');
	return (
		<div>
			{/* <h1>lh hello</h1> */}
			{/* Your layout header, navigation, etc. */}
			<Outlet /> {/* Render the content from routes */}
			{/* Your layout footer */}
		</div>
	);
};

export default Layout;
