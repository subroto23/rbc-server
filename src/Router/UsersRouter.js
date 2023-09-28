const express = require("express");
const {
  getUsersController,
} = require("../Controller/UsersControler/UsersControlers");
const searchingUsers = require("../Controller/UsersControler/searchingUsers");
const getUserById = require("../Controller/UsersControler/getUserById");
const deleteUser = require("../Controller/UsersControler/DeleteUser");
const UserRegistation = require("../Controller/UsersControler/UserRegistation");
const UserActivation = require("../Controller/UsersControler/UserActivation");
const { validateRegistation } = require("../Validator/Auth");
const runValidations = require("../Validator");
const upload = require("../Middleware/UploadFile");
const userRouter = express.Router();

//users Router Creating => /api/users
userRouter.get("/", getUsersController);

//Find Users by Searching => api/users/filter?search = subroto
userRouter.get("/filters", searchingUsers);

//Find Users By Id => api/users/:id
userRouter.get("/:id", getUserById);

//Delete Data with find Id => api/users/:id
userRouter.delete("/:id", deleteUser);

//User Registaion Process =>

userRouter.post(
  "/registation",
  upload.single("img"),
  validateRegistation,
  runValidations,
  UserRegistation
);

userRouter.post("/activation", UserActivation);

module.exports = userRouter;
