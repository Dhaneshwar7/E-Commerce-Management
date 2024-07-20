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
import { ForgetPassword, SignIn, SignUp } from './components/admin';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './Layout';

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
							<Route path="/admin/signin" element={<SignIn />} />
							<Route path="/admin/signup" element={<SignUp />} />
							<Route path="/admin/forget" element={<ForgetPassword />} />
						</Route>
					</Routes>
					{/* <Toaster position="top-center" reverseOrder={false} /> */}
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
