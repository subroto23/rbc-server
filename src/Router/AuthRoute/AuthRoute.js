const express = require("express");
const authRouter = express.Router();
const handleLogin = require("../../Controller/AuthControler/AuthLoginController");

//Login Router
authRouter.post("/login", handleLogin);

module.exports = authRouter;
