import { createAxiosInstance } from 'src/axios';
const axiosInstance = createAxiosInstance();

import {
	setUser,
	removeUser,
	isError,
	removeError,
	isLoading,
	setAllCartProducts,
	setMessage,
	setSuccess,
} from '../Reducers/UserReducer';

// app.use('/api/user', require('./routes/userRoutes'));
// app.use('/api/user/review', require('./routes/reviewRoutes'));
export const asyncHomepage = () => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.get('/api/user/home');
		// console.log(data);
		dispatch(setUser(data.data.currentUser));
	} catch (error) {
		// console.log(error);
		dispatch(isError(error.response.data.message));
	}
};
/* -----------  CURRENT USER   -----------*/
export const asyncCurrentUser = () => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.get('/api/user/current');
		// console.log(data.data.currentAdmin, 'Current Admin Added');
		dispatch(setUser(data.data.currentUser));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};
/* -----------  USER SIGN_UP  -----------*/
export const asyncSignUpUser = user => async (dispatch, getState) => {
	try {
		dispatch(isLoading(true));
		const data = await axiosInstance.post('/api/user/signup', user);
		// console.log(data, 'Admin SIGN_UP done');
		dispatch(setMessage(data.data.message));
		dispatch(setSuccess(data.data.success));
		dispatch(asyncCurrentUser());
	} catch (error) {
		// console.log(error);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   USER SIGN_IN   ----------*/
export const asyncSignInUser = user => async (dispatch, getState) => {
	try {
		dispatch(isLoading(true));
		const data = await axiosInstance.post('/api/user/signin', user);
		console.log(data, 'Admin SIGN_IN done');
		dispatch(setMessage(data.data.message));
		dispatch(setSuccess(data.data.success));
		dispatch(asyncCurrentUser(data));
	} catch (error) {
		console.log(error);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   USER LOG_OUT   ----------*/
export const asyncLogoutUser = () => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.post('/api/user/signout');
		// console.log(data, 'Admin Logout-done!');
		dispatch(removeUser(data));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   USER FORGET_PASSWORD_SENDLINK   ----------*/
export const asyncForgetLinkSend = email => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.post('/admin/sendlink-mail', email);
		// console.log(data, 'Admin Forget-LInk-Sent!');
		dispatch(setMessage(data.data.message));
		dispatch(setSuccess(data.data.success));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   USER VIEW ALL PRODUCTS   ----------*/
export const asyncAllProduct = () => async (dispatch, getState) => {
	try {
		dispatch(isLoading(true));
		const data = await axiosInstance.get('/user/product/viewall');
		dispatch(setAllCartProducts(data.data.products));
		// console.log(data.data.products, 'All Product Visible');
	} catch (error) {
		console.log(error);
		dispatch(isError(error.response.data.message));
	}
};

export const asyncSetMessage = () => async (dispatch, getState) => {
	try {
		dispatch(setMessage(null));
		dispatch(setSuccess(false));
	} catch (error) {
		console.log(error);
	}
};

export const asyncSearchProduct = debouncedSearch => async dispatch => {
	try {
		const params = new URLSearchParams({
			searchText: debouncedSearch,
		});

		const data = await axiosInstance.get(
			`/user/product/search?${params.toString()}`
		);
		console.log(data);
		dispatch(setAllCartProducts(data?.data?.products));
	} catch (error) {
		// console.log(error);
		dispatch(
			isError(error.response?.data?.message || 'Error occurred during search')
		);
	}
};

export const asyncRemoveErrors = () => async dispatch => {
	try {
		dispatch(removeError([]));
	} catch (error) {
		console.log(error);
	}
};
