import { Router } from "express";
import { getBookById, getAllBooks, checkBookById, reserveBookById } from "../controllers/bookController.js";

export const bookRouter = Router();
//bookRouter.get("/", (req, res) => { res.send("All books.") });
bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBookById);
bookRouter.get("/:bookId/reserve", checkBookById);
bookRouter.post("/:bookId/reserve", reserveBookById);