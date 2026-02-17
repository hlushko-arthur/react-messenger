export interface User {
	_id: string;
	name: string;
	email: string;
	username: string;
	avatar: string;
	messages: any[];
}

export type UserAuth = Pick<User, 'name' | 'email' | 'username'> & {
	password: string;
};