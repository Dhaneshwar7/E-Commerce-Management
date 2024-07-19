// src/axios.js
import axios from 'axios';

export const createAxiosInstance = () => {
	return axios.create({
		baseURL: import.meta.env.VITE_APP_API_URL,
		withCredentials: false, // Optionally set based on your needs
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
};
// 