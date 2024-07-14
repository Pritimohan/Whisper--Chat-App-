import User from "../models/userModel.js";
import Conversation from "../models/conversationModel.js";

export async function getUsersForSidebar(req, res) {
  try {
    const loggedInUser = req.user._id;
    const allUsers = await User.find().select("-password");
    if (!allUsers) {
      res.status(404).json({ error: "No users found" });
    }
    res.status(200).json(allUsers);
    
  } catch (error) {
    console.log(`Error from getUsers: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
