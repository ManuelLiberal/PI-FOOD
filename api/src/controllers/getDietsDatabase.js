//?-------------------IMPORTACIONES-------------------------

const { Diet } = require("../db");

//?-------------------FUNCIÓN-------------------------

const getDietsDatabase = async () => {
  const diets = await Diet.findAll();
  return diets;
};
module.exports = getDietsDatabase;
