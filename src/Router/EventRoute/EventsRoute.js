const express = require("express");
const eventRoute = express.Router();
const {
  eventsPostController,
} = require("../../Controller/EventsController/EventController");
const upload = require("../../Middleware/UploadFile");

eventRoute.post("/create", upload.single("image"), eventsPostController);

module.exports = eventRoute;
