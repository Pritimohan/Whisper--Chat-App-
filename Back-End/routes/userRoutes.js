import express from "express";
import { getUsersForSidebar } from "../controllers/userControllers.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", isLoggedIn, getUsersForSidebar);

export default router;
