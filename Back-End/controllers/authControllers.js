//package import

//file import
import User from "../models/userModel.js"
import { hashPassword, checkPassword, generateTokenAndSetCookie } from "../utils/utils.js";


export async function signUpUsers(req, res) {
    try {
        const { fullname, username, password, confirmPassword, email, gender } = req.body;
        // default profile picture
        const maleDp = "https://avatar.iran.liara.run/public/40"
        const femaleDp = "https://avatar.iran.liara.run/public/54"
        // check if all fields are filled
        if (!fullname || !username || !password || !confirmPassword || !email || !gender) {
            return res.status(400).json({ error: "Please fill all the fields" })
        }
        // check if password is at least 6 characters long
        if (password.length !== 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" })
        }
        // check if password and confirm password match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and Confirm Password does not match" })
        }
        // hash password
        const securePassword = await hashPassword(password)
        // check if user already exists
        const user = await User.findOne({
            $or: [{ email }, { username }]
        })
        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }

        // create new user
        const newUser = new User({
            fullname,
            username,
            password: securePassword,
            email,
            gender,
            profilepicture: gender === "male" ? maleDp : femaleDp,
        })



        if (newUser) {
            // generate token and set cookie
            generateTokenAndSetCookie(newUser._id, res)
            // save user
            await newUser.save()
            return res.status(201).json({ newUser, message: "User created successfully" })
        }
        else {
            // if user not created
            return res.status(400).json({ error: "User not created" })
        }


    } catch (error) {
        console.log(`Error from singup: ${error}`);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export async function logInUsers(req, res) {
    try {
        const { username, password } = req.body; //get username and password from request body

        //check if username and password are not empty
        if (!username || !password) {
            return res.status(400).json({ error: "Please insert username and password properly" })
        }
        //check if user exists
        const userData = await User.findOne({ username })
        if (!userData) {
            return res.status(400).json({ error: "Invalid username" })
        }
        //check if password is correct
        const isPasswordCorrect = await checkPassword(password, userData.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid password" })
        }
        //generate token and set cookie
        generateTokenAndSetCookie(userData._id, res)
        return res.status(200).json({ userData, message: "User logged in successfully" })

    } catch (error) {
        console.log(`Error from login : ${error}`);
        return res.status(500).json({ error: "Internal Server Error" })
    }

}

export async function logOutUsers(req, res) {
    try {
        //clear cookie
        res.clearCookie("token")
        return res.status(200).json({ message: "User logged out successfully" })
    } catch (error) {
        console.log(`Error from logout: ${error}`);
        return res.status(500).json({ error: "Internal Server Error" })
    }
}

