const express = require("express");
const {
  getUsersController,
} = require("../Controller/UsersControler/UsersControlers");
const searchingUsers = require("../Controller/UsersControler/searchingUsers");
const getUserById = require("../Controller/UsersControler/getUserById");
const deleteUser = require("../Controller/UsersControler/DeleteUser");
const { validateRegistation } = require("../Validator/Auth");
const runValidations = require("../Validator");
const upload = require("../Middleware/UploadFile");
const {
  userRegistation,
} = require("../Controller/UsersControler/UserRegistation");
const UserActivation = require("../Controller/UsersControler/UserActivation");
const updateUser = require("../Controller/UsersControler/updateUser");
const isLogedIn = require("../Middleware/isLogedin");
const isLogedOut = require("../Middleware/isLogedOut");
const isAdmin = require("../Middleware/isAdmin");
const isBanned = require("../Middleware/isBanned");
const userRouter = express.Router();

//users Router Creating => /api/users
userRouter.get("/", isLogedIn, isBanned, getUsersController);

//Find Users by Searching => api/users/filter?search = subroto
userRouter.get("/filters", isLogedIn, searchingUsers);

//Find Users By Id => api/users/:id
userRouter.get("/:id", getUserById);

//Delete Data with find Id => api/users/:id
userRouter.delete("/delete/:id", isLogedIn, deleteUser);

//User Registaion Process =>

userRouter.post(
  "/registation",
  upload.single("img"),
  // validateRegistation,
  // runValidations,
  userRegistation
);

userRouter.post("/activation/:token", isLogedOut, UserActivation);

userRouter.put("/update/:id", isLogedIn, upload.single("img"), updateUser);

module.exports = userRouter;
