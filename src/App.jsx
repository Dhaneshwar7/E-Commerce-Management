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
import { AuthLayout, ForgetPassword, SignIn, SignUp } from './components/auth';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './Layout';
import { AdminHomepage, HomepageWrapper } from './components/admin';

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
			{/* <RouterProvider router={router} />; */}
			<BrowserRouter>
				<Provider store={store}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route path="" element={<LandingPage />} />
							<Route path="/admin" element={<AuthLayout />} >
							<Route path="/admin/signin" element={<SignIn />} />
							<Route path="/admin/signup" element={<SignUp />} />
							<Route path="/admin/forget" element={<ForgetPassword />} />
							</Route>
							<Route path="/admin/homepage" element={<AdminHomepage />} />
							<Route path="/admin/homewrap" element={<HomepageWrapper />} />
						</Route>
					</Routes>
					{/* <Toaster position="top-center" reverseOrder={false} /> */}
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
