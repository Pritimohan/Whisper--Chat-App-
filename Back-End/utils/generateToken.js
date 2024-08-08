import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function generateTokenAndSetCookie(userId, res) {

    const jwtToken = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d' });// generate token
    // set token in cookie
    const options = {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production" ? true : false,
    };
    res.cookie("token", jwtToken, options);
    return jwtToken;
}
