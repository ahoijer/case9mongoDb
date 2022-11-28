import UserModel from "../models/UserModels.js";
// import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';

async function addUser(req, res) {
    let query = null;

    try {
        // collect data from body
        const { name, password } = req.body;

        // create user document instance locally
        const userDoc = new UserModel({ name, password })

        // save to database
        userDoc.save();

        // create message that operation was successfull
        query = new URLSearchParams({ type: "success", message: "Successfully created user!" });
    } catch (err) {
        // create message that operation was unsuccessfull

        query = new URLSearchParams({ type: "fail", message: err.message });
        console.error(err.message);
    } finally {
        const queryStr = query.toString();
        res.redirect(`/?${queryStr}`);
        // res.redirect(`/`);
    }
}

export default { addUser };