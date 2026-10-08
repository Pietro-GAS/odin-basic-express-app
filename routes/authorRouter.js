import { Router } from "express";
import { getAuthorById, getAllAuthors } from "../controllers/authorController.js";

export const authorRouter = Router();
authorRouter.get("/", getAllAuthors);
authorRouter.get("/:authorId", getAuthorById);