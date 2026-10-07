import { Router } from "express";
import { getBookById, checkBookById, reserveBookById } from "../controllers/bookController.js";

export const bookRouter = Router();
bookRouter.get("/", (req, res) => { res.send("All books.") });
bookRouter.get("/:bookId", getBookById);
bookRouter.get("/:bookId/reserve", checkBookById);
bookRouter.post("/:bookId/reserve", reserveBookById);