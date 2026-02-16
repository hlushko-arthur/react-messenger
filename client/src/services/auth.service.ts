import type { User, UserAuth } from '../core/interfaces/user.interface';
import http from './http.service';

const AuthService = {
	login: async (user: UserAuth): Promise<{success: boolean, message?: string}> => {
		try {
			const res = await http.post<User>('/auth/login', user);

			console.log(res);

			if (!res.status) {
				console.log(res.message);

				return {
					success: false,
					message: res.message,
				};
			}

			console.log('setitem');

			localStorage.setItem('user', JSON.stringify(res.data));

			return {
				success: true,
			};
		} catch (err) {
			console.error('Login error:', err);

			return { success: false, message: 'Something went wrong' };
		}
	},
};

export default AuthService;