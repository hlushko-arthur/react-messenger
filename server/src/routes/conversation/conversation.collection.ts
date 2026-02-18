import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IConversation extends Document {
	participants: string[];
	lastMessage: {
		_id: ObjectId;
		senderId: ObjectId;
		text: string;
	}
}

const conversationSchema = new Schema<IConversation>(
	{
		participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		lastMessage: {
			_id: { type: Schema.Types.ObjectId, ref: 'Message' },
			senderId: { type: Schema.Types.ObjectId, ref: 'User' },
			text: String,
		},

	},
	{ timestamps: true },
);

export default mongoose.model<IConversation>('Conversation', conversationSchema);