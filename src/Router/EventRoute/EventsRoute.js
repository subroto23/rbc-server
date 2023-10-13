const express = require("express");
const eventRoute = express.Router();
const {
  eventsPostController,
} = require("../../Controller/EventsController/EventController");
const upload = require("../../Middleware/UploadFile");
const {
  getEventController,
} = require("../../Controller/EventsController/GetController");

eventRoute.get("/", getEventController);
eventRoute.post("/create", upload.single("image"), eventsPostController);
module.exports = eventRoute;
