import axios from 'axios';

// export default

const instance = axios.create({
	baseUrl: 'https://product-management-server-iota.vercel.app',
	withCredentials: true,
});

export default instance; 
