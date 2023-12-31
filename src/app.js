const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const userRouter = require("./Router/UsersRouter");
const eventRoute = require("./Router/EventRoute/EventsRoute");
const sheedRouter = require("./Router/SheedRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./Router/AuthRoute/AuthRoute");
const bodyParser = require("body-parser");
const NewsRoute = require("./Router/NewsRoute/NewsRoute");
const CadaRoute = require("./Router/CadaRoute/CadaCollectRoute");
const TittleRoute = require("./Router/Title Route/TitleRoute");
const DueRoute = require("./Router/DueRoute/DueRoutes");

//
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());
//Express limits setup
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 400, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this Ip.please try again later",
});

//Limits midleware
app.use(apiLimiter);

//developar dependencies for get/post/put/delete etc methods undenstanble for useing
app.use(morgan("dev"));

//Form Related data controller middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Users Routers Creating
app.use("/api/users", userRouter);

//Auth Router
app.use("/auth", authRouter);

//Sheed users
app.use("/api/sheeds/users", sheedRouter);

//Events Adding
app.use("/events", eventRoute);

//News Routes
app.use("/api/news", NewsRoute);

//Cada Routes
app.use("/cada/details", CadaRoute);

//Cada Routes
app.use("/due/details", DueRoute);

//Title Routes
app.use("/title/heading", TittleRoute);

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
