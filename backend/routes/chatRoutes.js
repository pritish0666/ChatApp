import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
import { accessChat, fetchChats } from "../controllers/chatController.js";
import { createGroupChat } from "../controllers/chatController.js";
import { renameGroup } from "../controllers/chatController.js";
import { addToGroup } from "../controllers/chatController.js";
import { removeFromGroup } from "../controllers/chatController.js";

router.route("/").post(protect, accessChat);
router.route('/').get(protect,fetchChats);
router.route('/group').post(protect,createGroupChat);
router.route('/rename').put(protect,renameGroup);
router.route('/add').put(protect,addToGroup);
router.route('/remove').put(protect,removeFromGroup);

export default router;
