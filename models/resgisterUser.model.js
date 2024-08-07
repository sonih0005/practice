import mongoose, {Schema} from "mongoose";

const registerUserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const RegisterUser = mongoose.model('registerUser', registerUserSchema)