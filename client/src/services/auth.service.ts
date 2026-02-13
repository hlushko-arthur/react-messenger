import axios from 'axios';

const http = axios.create({
	baseURL: 'http://localhost:5173/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

http.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

http.interceptors.response.use(
	(res) => res,
	(err) => {
		if (err.response?.status === 401) {
			console.log('Unauthorized');
		}

		return Promise.reject(err);
	},
);

export default http;