import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
	email: string;
	password: string;
	name: string;
	comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true },
	},
	{ timestamps: true }
);

userSchema.pre('save', async function () {
	if (!this.isModified('password')) return;

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = function (password: string) {
	return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>('User', userSchema);