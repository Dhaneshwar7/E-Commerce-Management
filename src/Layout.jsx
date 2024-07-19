import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
		<div>
			{/* Your layout header, navigation, etc. */}
			<Outlet /> {/* Render the content from routes */}
			{/* Your layout footer */}
		</div>
	);
}

export default Layout