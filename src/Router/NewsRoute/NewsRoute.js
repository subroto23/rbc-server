const express = require("express");
const NewsRoute = express.Router();
const upload = require("../../Middleware/UploadFile");
const newsPostController = require("../../Controller/NewsController/NewsPostController");
const newsGetController = require("../../Controller/NewsController/NewsGetController");
const newsIdBasedController = require("../../Controller/NewsController/NewsIdSearched");
NewsRoute.get("/view", newsGetController);
NewsRoute.post("/create", upload.single("image"), newsPostController);
NewsRoute.get("/:id", newsIdBasedController);

module.exports = NewsRoute;
