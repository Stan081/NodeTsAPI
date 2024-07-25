import { Schema, model, Document } from 'mongoose';
import User from '@/resources/interfaces/user.interface'

// Create the schema corresponding to the document interface.
const UserSchema: Schema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Create a Model.
const User = model<User>('User', UserSchema);

export default User;
