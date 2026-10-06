import { Router } from "express";
import { getAuthorById } from "../controllers/authorController.js";

export const authorRouter = Router();
authorRouter.get("/", (req, res) => { res.send("All authors."); });
authorRouter.get("/:authorId", getAuthorById);