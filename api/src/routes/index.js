const { Router } = require("express");
//?Se importan las rutas
const recipesRouter = require("./recipesRouter");
const dietsRouter = require("./dietsRouter");

const router = Router();

//Configuración de rutas

router.use("/recipes", recipesRouter);
router.use("/diets", dietsRouter);

module.exports = router;
