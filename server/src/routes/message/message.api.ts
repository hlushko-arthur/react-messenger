import { Router } from "express";
import Message from "./message.collection";
import Conversation from "../conversation/conversation.collection";

const router = Router();

//
// ✅ Send message
//
router.post("/send", async (req, res) => {
	try {
		if (!req.body.text?.trim()) {
			return res.sendError(400, "Message text required.");
		}

		const message = await Message.create({
			...req.body,
			readBy: [req.body.senderId],
		});

		await Conversation.findByIdAndUpdate(req.body.conversationId, {
			lastMessage: {
				_id: message._id,
				senderId: req.body.senderId,
				text: req.body.text,
			},
			updatedAt: new Date(),
		});

		res.sendResponse(200, message);
	} catch {
		res.sendError(500, "Server Error.");
	}
});

//
// ✅ Get messages (latest)
//
router.get("/", async (req, res) => {
	try {
		const { conversationId, limit = 30 } = req.query;

		const messages = await Message.find({ conversationId })
			.sort({ createdAt: -1 })
			.limit(Number(limit));

		res.sendResponse(200, messages.reverse());
	} catch {
		res.sendError(500, "Server Error.");
	}
});

//
// ✅ Cursor pagination (load older)
//
// router.get("/before", async (req, res) => {
// 	try {
// 		const { conversationId, before, limit = 30 } = req.query;

// 		const messages = await Message.find({
// 			conversationId,
// 			createdAt: { $lt: new Date(before) },
// 		})
// 			.sort({ createdAt: -1 })
// 			.limit(Number(limit));

// 		res.sendResponse(200, messages.reverse());
// 	} catch {
// 		res.sendError(500, "Server Error.");
// 	}
// });

//
// ✅ Mark as read
//
// router.post("/read", async (req: any, res) => {
// 	try {
// 		const { conversationId } = req.body;

// 		const userId = new Types.ObjectId(req.userId);

// 		await Message.updateMany(
// 			{
// 				conversationId,
// 				senderId: { $ne: userId },
// 				readBy: { $ne: userId },
// 			},
// 			{
// 				$addToSet: { readBy: userId },
// 			},
// 		);

// 		res.sendResponse(200, "Marked as read.");
// 	} catch {
// 		res.sendError(500, "Server Error.");
// 	}
// });

export default router;
