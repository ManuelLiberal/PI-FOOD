const { Router } = require("express");

//?Importaciones de handlers

const getAllDietsHandler = require("../handlers/getAllDietsHandler");

//?Declaracion de router

const dietsRouter = Router();

dietsRouter.get("/", getAllDietsHandler);

module.exports = dietsRouter;
