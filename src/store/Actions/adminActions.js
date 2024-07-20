import { createAxiosInstance } from 'src/axios';
const axiosInstance = createAxiosInstance();

import {
	addAdmin,
	removeAdmin,
	isError,
	removeError,
	isLoading,
	setAdmin,
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
		console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
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
		console.log(error.response.data.message);
		dispatch(isError(error.response.data.message));
	}
};

/* -----------   ADMIN SIGN_IN   ----------*/
export const asyncSignInAdmin = admin => async (dispatch, getState) => {
	try {
		const data = await axiosInstance.post('/admin/signin', admin);
		console.log(data, 'Admin SIGN_IN done');
		dispatch(asyncCurrentAdmin(data));
	} catch (error) {
		console.log(error.response.data.message);
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
