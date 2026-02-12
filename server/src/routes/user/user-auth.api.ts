import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from './user.collection';

const router = Router();

// SIGNUP
router.post('/register', async (req, res) => {
	try {
		const userExists = await User.findOne({
			email: req.body.email
		});

		if (userExists) {
			return res.status(400).json({
				status: false,
				message: 'User exists'
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
			// return res.sendError(200, 'The password you have entered is incorrect.');
			return;
		}

		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: '7d' }
		);

		res.json({ token });
	} catch {
		res.status(500).json({ message: 'Server error' });
	}
});

export default router;