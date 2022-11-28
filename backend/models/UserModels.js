import mongoose from "mongoose";
import dotenv from "dotenv";
import { exit } from "process";
import UserSchema from './UserSchema.js'

// read from .env file and add to process.env
dotenv.config();

// exit program if no connection string
if (!process.env.MONGO_CONNECTION_STR) {
    console.error("MONGO_CONNECTION_STR is not defined in .env file");
    exit();
}

// connect to database
const uri = process.env.MONGO_CONNECTION_STR;
mongoose.connect(uri);

const userModel = mongoose.model("User", UserSchema.userSchema);

export default userModel;