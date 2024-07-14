import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
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
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    profilepicture: {
        type: String,
        default: ""
    }
}, { timestamps: true })

export default mongoose.model("User", userModel)

