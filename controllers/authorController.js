import * as db from "../db.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundErrors.js";

export async function getAuthorById(req, res) {
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        throw new CustomNotFoundError("Author not found.");
    }

    res.render("authors/authorInfo", { author: author });
};

export async function getAllAuthors(req, res) {
    const authors = await db.getAllAuthors();

    if (!authors) {
        throw new CustomNotFoundError("Author list not found");
    }

    res.render("authors/authorList", { authors: authors});
};