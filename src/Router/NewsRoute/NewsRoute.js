const express = require("express");
const NewsRoute = express.Router();
const upload = require("../../Middleware/UploadFile");
const newsPostController = require("../../Controller/NewsController/NewsPostController");
const newsGetController = require("../../Controller/NewsController/NewsGetController");

NewsRoute.get("/", newsGetController);
NewsRoute.post("/create", upload.single("image"), newsPostController);

module.exports = NewsRoute;
