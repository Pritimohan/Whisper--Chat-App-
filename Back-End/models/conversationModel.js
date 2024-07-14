import mongoose from "mongoose";

const conversationModel = new mongoose.Schema(
  {
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required: true,
        default: [],
      },
    ],
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", conversationModel);
