const express = require("express");
const cadaPostController = require("../../Controller/Cada/CadaPostController");
const cadaGetController = require("../../Controller/Cada/CadaGetController");
const CadaUpdateController = require("../../Controller/Cada/CadaUpdateController");
const cadaGetByIdController = require("../../Controller/Cada/cadaGetByIdController");
const CadaRoute = express.Router();

CadaRoute.get("/", cadaGetController);
CadaRoute.get("/:id", cadaGetByIdController);
CadaRoute.post("/create", cadaPostController);
CadaRoute.put("/update/:id", CadaUpdateController);

module.exports = CadaRoute;
