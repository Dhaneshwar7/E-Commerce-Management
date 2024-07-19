// src/axios.js
import axios from 'axios';

export const createAxiosInstance = () => {
	return axios.create({
		baseURL: import.meta.env.VITE_APP_API_URL,
		withCredentials: true,
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
};
//
