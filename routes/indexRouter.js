import { Router } from "express";

export const indexRouter = Router();
indexRouter.get("", (req, res) => { res.send("This is the home page."); });
indexRouter.get("/about", (req, res) => { res.send("This is the site about page."); });
indexRouter.get("/contacts", (req, res) => { res.send("Here you can check the site contact info."); });
indexRouter.post("/contacts", (req, res) => { res.send("Here you can contact the site directly"); });