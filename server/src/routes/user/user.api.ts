import { Router } from "express";
import User from "./user.collection";

const router = Router();

router.post('/search', async (req, res) => {
	try {
		const { username } = req.body;

		if (!username?.trim()) {
			return res.sendResponse(200, []);
		}

		const safeUsername = username.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

		const users = await User.find({
			username: {
				$regex: `^${safeUsername}`,
				$options: 'i',
			},
		})
			.select('_id name username avatar')
			.limit(10);

		res.sendResponse(200, users);
	} catch {
		res.sendError(500, 'Server error.');
	}
});

export default router;