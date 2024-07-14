import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

export async function isLoggedIn(req, res, next) {
  try {
    const { token } = req.cookies; // get token from cookies
    // if token is not found in cookies, return error
    if (!token) {
      return res.status(401).json({ error: "Unauthorized- Token not found" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET); // verify token
    // if token is invalid, return error
    if (!decode) {
      return res.status(401).json({ error: "Unauthorized- invalid token" });
    }
    const userData = await User.findById(decode.userId).select("-password"); // get user data from token
    // if user data is not found, return error
    if (!userData) {
      return res.status(400).json({ error: "User not found" });
    }
    // if everything is fine, set user data in res.locals and call next
    req.user = userData;
    next();
  } catch (error) {
    console.log(`Error from isloggdin: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
