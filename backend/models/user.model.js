import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "password must be at least 6 character long"],
    },
    role: {
      type: String,
      enum: ["viewer", "admin"],
      default: "viewer",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
