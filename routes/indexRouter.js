import { Router } from "express";

export const indexRouter = Router();
indexRouter.get("", (req, res) => { res.render("index/index"); });
indexRouter.get("/about", (req, res) => { res.render("about/about"); });
indexRouter.get("/contacts", (req, res) => { res.render("contacts/contacts"); });
indexRouter.post("/contacts", (req, res) => { res.send("Here you can contact the site directly"); });