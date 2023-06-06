//?----------------------------IMPORTACIONES--------------------------------

const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

//?------------------------------FUNCIÓN-------------------------------------

//*En esta función se realiza una petición a la api para obtener un arreglo de dietas.
//* Primero se obtiene un arreglo con todas las dietas de cada receta pedida
//* Segundo se hace un array de un set de ese ultimo arreglo para eliminar las repetidas
//* Por último se le agrega vegetarian manualmente

const getDietsAPI = async () => {
  const response = await axios.get(
    `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const { results } = response.data;
  const dietsRep = results.flatMap((recipe) => recipe.diets); //filtro las dietas en un arreglo entero

  const diets = Array.from(new Set(dietsRep)); // elimino las repetidas
  diets.push("vegetarian"); //le agrego vegetarian

  return diets;
};

module.exports = getDietsAPI;
