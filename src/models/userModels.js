import mongoose from "mongoose";
import moongoose from "mongoose";

const userSchema = new moongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide Your Name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide the passward"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswardToken: String,
  forgotPasswardTokenExpiry: Date,
  verifyTokenExpiry: Date,
});

const User = moongoose.model.users || mongoose.model("users", userSchema);
export default User;
