import type { User } from "../core/interfaces/user.interface";
import http from "./http.service";

const UserService = {
	search: async (username: string): Promise<User[]> => {
		const res = await http.post<User[]>('user/search', {
			username,
		});

		if (!res.status) {
			return [];
		}

		return res.data;
	},
};

export default UserService;