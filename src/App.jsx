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
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/forget" element={<ForgetPassword />} />
				</Routes>
				{/* <Toaster position="top-center" reverseOrder={false} /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
