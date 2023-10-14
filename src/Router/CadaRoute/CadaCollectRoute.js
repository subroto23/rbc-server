const express = require("express");
const cadaPostController = require("../../Controller/Cada/CadaPostController");
const cadaGetController = require("../../Controller/Cada/CadaGetController");
const CadaUpdateController = require("../../Controller/Cada/CadaUpdateController");
const CadaRoute = express.Router();

CadaRoute.get("/create", cadaGetController);
CadaRoute.post("/create", cadaPostController);
CadaRoute.put("/update/:id", CadaUpdateController);

module.exports = CadaRoute;
