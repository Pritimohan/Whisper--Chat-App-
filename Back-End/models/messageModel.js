import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
    senderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receverid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },

}, { timestamps: true })

export default mongoose.model("Message", messageModel)