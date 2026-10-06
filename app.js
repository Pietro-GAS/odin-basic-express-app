import express from "express";
import { authorRouter } from "./routes/authorRouter.js";
import { bookRouter } from "./routes/bookRouter.js";
import { indexRouter } from "./routes/indexRouter.js";

const app = express();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}...`);
});