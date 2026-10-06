import express from "express";
import { authorRouter } from "./routes/authorRouter.js";

const app = express();

app.use("/authors", authorRouter);
app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}...`);
});