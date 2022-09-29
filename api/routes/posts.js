import express from "express";
import { addPost, deletePost, getByPostId, getPost, updatePost } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPost);
router.get("/:id", getByPostId);
router.post("/", addPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);


export default router;