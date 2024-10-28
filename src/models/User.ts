// src/models/User.ts
import mongoose, { Schema, model, models } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default models.User || model<IUser>('User', UserSchema);
