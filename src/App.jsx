import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
	AdminLandingPage,
	AdminLayout,
	FilterProductPage,
} from './components/admin';
import { useDispatch, useSelector } from 'react-redux';
import UserSignIn from './components/user/UserSignIn';
import UserSignUp from './components/user/UserSignup';

function App() {
	const { isAuth } = useSelector(state => state.adminReducer);
	const dispatch = useDispatch();
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" element={<LandingPage />} />
						<Route path="/user/auth/signin" element={<UserSignIn />} />
						<Route path="/user/auth/signup" element={<UserSignUp />} />

						<Route path="/admin" element={<AdminLayout />}>
							<Route path="/admin" element={<AuthLayout />}>
								<Route path="" element={<AdminLandingPage />} />
								<Route path="/admin/homepage" element={<AdminHomepage />} />
								<Route path="/admin/filter" element={<FilterProductPage />} />
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
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
