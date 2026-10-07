import express from "express";
import { authorRouter } from "./routes/authorRouter.js";
import { bookRouter } from "./routes/bookRouter.js";
import { indexRouter } from "./routes/indexRouter.js";
import { path } from "node:path";

const app = express();

// enable ejs as view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((req, res, next) => {
  throw new Error("OH NO!");
  // or next(new Error("OH NO!"));
});
//error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  // We can specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(`Error ${err.statusCode}: ${err.message}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}...`);
});