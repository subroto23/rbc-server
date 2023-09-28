const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const userRouter = require("./Router/UsersRouter");
const sheedRouter = require("./Router/SheedRouter");

//Express limits setup
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this Ip.please try again later",
});

//Limits midleware
app.use(apiLimiter);

//developar dependencies for get/post/put/delete etc methods undenstanble for useing
app.use(morgan("dev"));

//Form Related data controller middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//creating server
app.get("/", (req, res) => {
  res.status(200).send({ message: "welcome to the new server" });
});

//Users Routers Creating
app.use("/api/users", userRouter);

//Sheed users
app.use("/api/sheeds/users", sheedRouter);

//clint side error
app.use((req, res, next) => {
  next(createError(404, "Router not found"));
});

//Server Side Error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
