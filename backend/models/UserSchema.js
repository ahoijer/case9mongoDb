// import validator from 'validator';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            minlength: 3,
            maxlength: 30,
            required: true
        },
        password: {
            type: String,
            minlength: 8,
            maxlength: 24,
            required: true
        }
    }
)

userSchema.pre('save', function (next) {

    if (this.password) {

        let salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(this.password, salt)

    }

    next()

});

export default { userSchema };