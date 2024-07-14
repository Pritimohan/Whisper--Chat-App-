import User from "../models/userModel.js";
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export async function sentMessage(req, res) {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.id;
    const { message } = req.body;

    try {
      // check if receiver exists
      await User.findById(receiverId);
    } catch (error) {
      return res.status(404).json({ error: "User not found" });
    }
    // check if conversation exists
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // if conversation does not exist, create a new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    // check if message exists
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    // create a new message
    const newMessage = new Message({
      senderid: senderId,
      receverid: receiverId,
      message: message,
    });
    // if message is not created, return an error
    if (!newMessage) {
      return res.status(400).json({ error: "Message not sent" });
    }
    // save the message
    conversation.messages.push(newMessage._id);

    // await conversation.save();
    // await newMessage.save();

    await Promise.all([await conversation.save(), await newMessage.save()]);
    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(`Error from sentMessage: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getMessage(req, res) {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.id;
    
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    // if conversation does not exist, return an error
    if (!conversation) {
      res.status(400).json([]);
    }
    res.status(200).json(conversation.messages);

  } catch (error) {
    console.log(`Error from getMessage: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
