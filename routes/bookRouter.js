import { Router } from "express";

export const bookRouter = Router();
bookRouter.get("/", (req, res) => { res.send("All books.") });
bookRouter.get("/:bookId", (req, res) => {
    const { bookId}  = req.params;
    res.send(`Book ID: ${bookId}`);
});
bookRouter.get("/:bookId/reserve", (req, res) => {
    const { bookId}  = req.params;
    res.send(`This is where you can check the reservation status of book ID: ${bookId}.`);
});
bookRouter.post("/:bookId/reserve", (req, res) => {
    const { bookId}  = req.params;
    res.send(`This is where you can reserve book ID: ${bookId}.`);
});