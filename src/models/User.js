import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      requireed: true,
    },
    email: {
      type: String,
      unique: true,
      requireed: true,
    },
    password: {
      type: String,
      requireed: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
