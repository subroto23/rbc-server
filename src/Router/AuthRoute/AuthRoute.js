const express = require("express");
const authRouter = express.Router();
const handleLogin = require("../../Controller/AuthControler/AuthLoginController");
const handleLogOut = require("../../Controller/AuthControler/AuthLogOut");

//Login Router
authRouter.post("/login", handleLogin);
//LogOut
authRouter.post("/logout", handleLogOut);

module.exports = authRouter;
