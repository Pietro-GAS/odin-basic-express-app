import * as db from "../db.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundErrors.js";

export async function getBookById(req, res) {
    const { bookId } = req.params;
    const book = await db.getBookById(Number(bookId));

    if (!book) {
        throw new CustomNotFoundError("Book not found.");
    };

    res.send(`Book Title: ${book.title}`);
};

export async function reserveBookById(req, res) {
    const { bookId } = req.params;
    const book = await db.getBookById(Number(bookId));

    if (!book) {
        throw new CustomNotFoundError("Book not found.");
    };

    res.send(`This is where you can reserve the book "${book.title}".`);
};

export async function checkBookById(req, res) {
    const { bookId } = req.params;
    const book = await db.getBookById(Number(bookId));

    if (!book) {
        throw new CustomNotFoundError("Book not found.");
    };

    res.send(`This is where you can check the reservation status of the book "${book.title}".`);
};