import { createAxiosInstance } from 'src/axios';
const axiosInstance = createAxiosInstance();

import {
	currentAdmin,
	addAdmin,
	removeAdmin,
	isError,
	removeError,
	isLoading,
} from '../Reducers/AdminReducer';

export const asyncHomepage = () => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.get('/');
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
/* -----------  CURRENT ADMIN   -----------*/
export const asyncCurrentAdmin = () => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.get('/admin');
		console.log(data, 'Current Admin Added');
		dispatch(currentAdmin(data));
	} catch (error) {
		console.log(error);
		dispatch(isError(error));
	}
};
/* -----------  ADMIN SIGN_UP  -----------*/
export const asyncSignUpAdmin = admin => async (dispatch, getState) => {
	try {
		console.log(admin);
		const { data } = await axiosInstance.post('/admin/signup', admin);
		console.log(data, 'Admin SIGN_UP done');
		dispatch(addAdmin(data));
	} catch (error) {
		console.log(error);
		dispatch(isError(error));
	}
};

/* -----------   ADMIN SIGN_IN   ----------*/
export const asyncSignInAdmin = admin => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.post('/admin/signin', admin);
		console.log(data, 'Admin SIGN_IN done');
		dispatch(addAdmin(data));
	} catch (error) {
		console.log(error);
		dispatch(isError(error));
	}
};

/* -----------   ADMIN LOG_OUT   ----------*/
export const asyncLogoutAdmin = () => async (dispatch, getState) => {
	try {
		const { data } = await axiosInstance.get('/admin/signout');
		console.log(data, 'Admin Logout-done!');
		dispatch(removeAdmin(data));
	} catch (error) {
		console.log(error);
		dispatch(isError(error));
	}
};
