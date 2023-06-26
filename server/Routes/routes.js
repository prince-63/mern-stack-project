import express from "express";
import register from "../Middleware/register.js";
import login from "../Middleware/login.js";

const route = express.Router();

route.get("/", (req, res) => {
    res.send("hello world");
});

route.get("/login", (req, res) => {
    res.send("this is a login page.");
})

route.get("/register", (req, res) => {
    res.send("this is a register page.");
})

route.get("/about", (req, res) => {
    res.send("this is a about page.");
})

route.post("/register", register);

route.post("/login", login);

export default route;
