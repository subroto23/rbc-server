const express = require("express");
const eventRoute = express.Router();
const {
  eventsPostController,
} = require("../../Controller/EventsController/EventController");

eventRoute.post("/create", eventsPostController);

module.exports = eventRoute;
