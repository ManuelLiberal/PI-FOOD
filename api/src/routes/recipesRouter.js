const { Router } = require("express");

//?Importaciones de handlers

const getAllRecipesHandler = require("../handlers/getAllRecipesHandler");
const getDetailRecipeHandler = require("../handlers/getDetailRecipeHandler");
const postRecipeHandler = require("../handlers/postRecipeHandler");

//?Declaración de router

const recipesRouter = Router();

recipesRouter.get("/", getAllRecipesHandler);
recipesRouter.get("/:id", getDetailRecipeHandler);
recipesRouter.post("/", postRecipeHandler);

module.exports = recipesRouter;
