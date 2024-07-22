import './App.css';
import LandingPage from './LandingPage';
import {
	BrowserRouter,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Routes,
} from 'react-router-dom';
import {
	AuthLayout,
	ForgetPassword,
	ResetPassword,
	SignIn,
	SignUp,
} from './components/auth';
import Layout from './Layout';
import {
	AdminHomepage,
	AdminLayout,
	FilterProductPage,
} from './components/admin';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { useEffect, useState } from 'react';
import {Profile} from './components/admin';

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route path="" element={<LandingPage />} />
							<Route path="/admin" element={<AuthLayout />}>
								<Route path="/admin/auth/signin" element={<SignIn />} />
								<Route path="/admin/auth/signup" element={<SignUp />} />
								<Route
									path="/admin/auth/forget-password"
									element={<ForgetPassword />}
								/>
								<Route
									path="/admin/auth/reset-password"
									element={<ResetPassword />}
								/>
							</Route>
							<Route path="/admin" element={<AdminLayout />}>
								<Route path="/admin/homepage" element={<AdminHomepage />} />
								<Route path="/admin/filter" element={<FilterProductPage />} />
							</Route>
						</Route>
					</Routes>
					{/* <Toaster position="top-center" reverseOrder={false} /> */}
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
