import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IMessage extends Document {
	conversationid: Schema.Types.ObjectId;
	senderId: Schema.Types.ObjectId;
	text: string;
	createdAt: string;
	readBy: Schema.Types.ObjectId[]
}

const messageSchema = new Schema<IMessage>(
	{
		conversationid: { type: Schema.Types.ObjectId, ref: 'Conversation' },
		senderId: { type: Schema.Types.ObjectId, ref: 'User' },
		text: String,
		createdAt: String,
		readBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],

	},
	{ timestamps: true },
);

export default mongoose.model<IMessage>('Message', messageSchema);