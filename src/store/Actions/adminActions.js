import { createAxiosInstance } from 'src/axios';
const axiosInstance = createAxiosInstance();

import {
	currentAdmin,
	addAdmin,
	removeAdmin,
	isError,
	removeError,
} from '../Reducers/AdminReducer';

export const asyncCurrentAdmin = () => async (dispatch, getState) => {
	const { data } = await axiosInstance.get('/');
	console.log(data);
};
