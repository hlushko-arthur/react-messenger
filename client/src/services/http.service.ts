import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { Response } from '../core/interfaces/api.interface';

const http = axios.create({
	baseURL: 'http://localhost:5173/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

// http.interceptors.request.use(
// 	(config) => {
// 		const token = localStorage.getItem('token');

// 		if (token) {
// 			config.headers['Authorization'] = `Bearer ${token}`;
// 		}

// 		return config;
// 	},
// 	(error) => Promise.reject(error),
// );

// http.interceptors.response.use(
// 	(response) => response,
// 	(error) => {
// 		console.error('HTTP error:', error);

// 		return Promise.reject(error);
// 	},
// );

const HttpService = {
	get: async <T = unknown>(url: string): Promise<Response<T>> => {
		const res = await http.get<Response<T>>(url);

		return res.data;
	},

	post: async <T = unknown>(url: string, data?: unknown): Promise<Response<T>> => {
		const res = await http.post<Response<T>>(url, data);

		return res.data;
	},
};

export default HttpService;

// import axios from 'axios';

// const http = axios.create({
// 	baseURL: 'http://localhost:5173/api',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// });

// http.interceptors.request.use((config) => {
// 	return config;
// });

// http.interceptors.response.use(
// 	(res) => res,
// 	(err) => {
// 		if (err.response?.status === 401) {
// 			console.log('Unauthorized');
// 		}

// 		return Promise.reject(err);
// 	},
// );

// export default http;