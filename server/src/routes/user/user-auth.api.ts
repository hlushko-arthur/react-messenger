import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from './user.collection';
import { clearUserResponse } from '../../utils/utils';

const router = Router();

// SIGNUP
router.post('/register', async (req, res) => {
	try {
		const userExists = await User.findOne({
			email: req.body.email,
		});

		if (userExists) {
			return res.status(400).json({
				status: false,
				message: 'User exists',
			});
		}

		const user = await User.create({ ...req.body });

		res.json({
			message: 'Registered',
			userId: user._id,
		});
	} catch {
		res.status(500).json({ message: 'Server error' });
	}
});

// LOGIN
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return res.sendError(200, 'The password you have entered is incorrect.');
		}

		const isMatch = await user.comparePassword(password);

		if (!isMatch) {
			return res.sendError(200, 'The password you have entered is incorrect.');
		}

		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: '7d' },
		);

		res.cookie("Authorization", `Bearer ${token}`, {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.sendResponse(200, clearUserResponse(user));
	} catch (err) {
		console.log(err);

		res.status(500).json({ message: err });
	}
});

export default router;