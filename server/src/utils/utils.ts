export const clearUserResponse = (user: any) => {
	const userData = user.toJSON();

	const { password: _, ...safeUser } = userData;

	return safeUser;
};