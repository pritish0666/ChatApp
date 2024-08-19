import express from "express";
const router = express.Router();
import { allMessages, sendMessage } from "../controllers/messageControllers.js";
import { protect } from "../middleware/authMiddleware.js";


router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

export default router;
