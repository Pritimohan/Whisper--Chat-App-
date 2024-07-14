import express from "express";
import { logInUsers, logOutUsers, signUpUsers } from "../controllers/authControllers.js"
import { isLoggedIn } from "../middlewares/middleware.js";


const router = express.Router()

router.post("/singup", signUpUsers)
router.post("/login", logInUsers)
router.post("/logout", isLoggedIn, logOutUsers)


export default router;