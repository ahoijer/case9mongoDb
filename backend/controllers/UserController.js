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

async function loginUser(obj) {

    //time to check if the user even exists 
    const user = await getUsername(obj.name);

    if (!user) {
        console.log('login has failed')
        return {error: 'Username or password is wrong'}
    }

    //compare hashed obj.password , hashed password in database
    const mathPassword = bcrypt.compareSync(obj.password, user.password);

    if (!mathPassword) {
        console.log('Password failed');
        return {error: 'Username or password is wrong'}
    } else {
        console.log('Success login');
        return {result: 'success', message: 'Password is matching', user: user}
    }
}


async function getUsername(username) {
    return await UserModel.findOne({"name": username});
}

export default { addUser, loginUser, getUsername };