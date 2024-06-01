import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
});

const User = model("User", UserSchema);
export default User;
