//?-------------------IMPORTACIONES-------------------------

const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;
const mapRecipes = require("../functions/mapRecipes");

//?-------------------FUNCIÓN-------------------------

//*En esta función se buscan las recetas. Según si hay query o no es la petición que se realiza
//* Luego de obtener las recetas, se acortan y se "limpian" las propiedades que se necesitan

const getRecipesAPI = async (title) => {
  const response = title
    ? await axios.get(
        `${API_URL}/recipes/complexSearch?query=${title}&apiKey=${API_KEY}&addRecipeInformation=true&number=10&instructionsRequired=true`
      )
    : await axios.get(
        `${API_URL}/recipes/complexSearch?&apiKey=${API_KEY}&addRecipeInformation=true&number=100&instructionsRequired=true`
      );

  const recipesLarge = response.data.results;
  const recipesShort = mapRecipes(recipesLarge);
  if (!recipesShort.length) {
    throw Error({
      message: "Ha ocurrido un error y no se han obtenido las recetas",
    });
  }
  return recipesShort;
};
module.exports = getRecipesAPI;
