//?-------------------IMPORTACIONES-------------------------

const { Diet } = require("../db");

//?-------------------FUNCION-------------------------

const dietsToDatabase = async (dietsAPI) => {
  const diets = await Diet.bulkCreate(dietsAPI);
  return diets;
};

module.exports = dietsToDatabase;
