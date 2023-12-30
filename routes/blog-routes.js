import express from "express";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  getBlogById,
  deleteBlog,
  getUserById,
  addComment,
  getCommentsForBlog
} from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/comments/:id",getCommentsForBlog);
blogRouter.post("/add", addBlog);
blogRouter.post("/comment",addComment);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getUserById);

export default blogRouter;
