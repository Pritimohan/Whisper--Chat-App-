import User from "../models/userModel.js";
import Conversation from "../models/conversationModel.js";

export async function getUsersForSidebar(req, res) {
  try {
    const loggedInUser = req.user._id;
    const allUsers = await User.find({_id: { $ne: loggedInUser } }).select("-password")  // get all users except the logged in user;

    if (!allUsers) {
      return res.status(404).json({ error: "No users found" });
    }
    return res.status(200).json(allUsers);

  } catch (error) {
    console.log(`Error from getUsers: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getSearchUsers(req, res) {
  try {
    const q = req.query.q;
    const searchResult = await User.find({ username: { $regex: q } }).select("-password");

    if (!searchResult) {
      return res.status(404).json({ error: "No users found" })
    };


    return res.status(200).json({ searchResult })

  } catch (error) {
    console.log(`Error from getSearchUsers: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }

}