import * as db from "../db.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundErrors.js";

export async function getAuthorById(req, res) {
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        throw new CustomNotFoundError("Author not found.");
    }

    res.send(`Author Name: ${author.name}`);

    //try {
    //    if (!author) {
    //        res.status(404).send("Author not found.");
    //        return;
    //    }
    //    
    //    res.send(`Author name: ${author.name}`);
    //} catch (error) {
    //    console.log("Error retrieving author:", error);
    //    res.status(500).send("Internal Server Error.");
    //    // or we can call `next(error)` instead of sending a response here.
    //    // Using `next(error)` will only render an error page in the express' default view and respond with the whole html to the client.
    //    // So we will need to create a special type of middleware function if we want a different response.
    //}
};