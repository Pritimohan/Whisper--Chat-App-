import express from "express";
import { getMessage, sentMessage } from "../controllers/messageControllers.js";
import { isLoggedIn } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/send/:id", isLoggedIn, sentMessage);
router.get("/:id", isLoggedIn, getMessage);

export default router;
