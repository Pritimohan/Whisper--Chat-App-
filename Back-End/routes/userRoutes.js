import express from "express";
import { getUsersForSidebar, getSearchUsers } from "../controllers/userControllers.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", isLoggedIn, getUsersForSidebar);
router.get("/search", isLoggedIn, getSearchUsers)

export default router;
