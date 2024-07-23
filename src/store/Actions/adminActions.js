import { createAxiosInstance } from 'src/axios';
const axiosInstance = createAxiosInstance();

import {
	setAdmin,
	removeAdmin,
	isError,
	removeError,
	isLoading,
	setAllProducts,
} from '../Reducers/AdminReducer';

export const asyncHomepage = () => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.get('/');
		// console.log(data);
		dispatch(setAdmin(data.data.currentAdmin));
	} catch (error) {
		dispatch(isError(error.response.data.message));
	}
};
/* -----------  CURRENT ADMIN   -----------*/
export const asyncCurrentAdmin = () => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.get('/admin');
		// console.log(data.data.currentAdmin, 'Current Admin Added');
		dispatch(setAdmin(data.data.currentAdmin));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error));
	}
};
/* -----------  ADMIN SIGN_UP  -----------*/
export const asyncSignUpAdmin = admin => async (dispatch, getState) => {
	try {
		console.log(admin);
		const { data } = await axiosInstance.post('/admin/signup', admin);
		// console.log(data, 'Admin SIGN_UP done');
		dispatch(asyncCurrentAdmin());
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN SIGN_IN   ----------*/
export const asyncSignInAdmin = admin => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.post('/admin/signin', admin);
		// console.log(data, 'Admin SIGN_IN done');
		dispatch(asyncCurrentAdmin(data));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN LOG_OUT   ----------*/
export const asyncLogoutAdmin = () => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.get('/admin/signout');
		// console.log(data, 'Admin Logout-done!');
		dispatch(removeAdmin(data));
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN FORGET_PASSWORD_SENDLINK   ----------*/
export const asyncForgetLinkSend = email => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.post('/admin/sendlink-mail', email);
		// console.log(data, 'Admin Forget-LInk-Sent!');
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN PRODUCT_CREAT   ----------*/
export const asyncCreateProduct = formData => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.post(
			'/admin/product/create-product',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		console.log(data, 'Product donnnnnnnn');
	} catch (error) {
		// console.log(error.response.data.message);
		console.log('Product creeeete fail');
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN VIEW ALL PRODUCTS   ----------*/
export const asyncAllProduct = () => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.get('/admin/product/viewall');
		dispatch(setAllProducts(data.data.products));
		// console.log(data.data.products, 'All Product Visible');
	} catch (error) {
		// console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};
