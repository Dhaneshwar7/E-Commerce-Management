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
	AddProductPage,
	AdminHomepage,
	AdminLayout,
	FilterProductPage,
} from './components/admin';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useEffect, useState } from 'react';

function App() {
	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path="/" element={<LandingPage />}>
	// 			<Route path="/sigin" element={<SignIn />} />
	// 			<Route path="/signup" element={<SignUp />} />
	// 		</Route>
	// 	)
	// );
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
