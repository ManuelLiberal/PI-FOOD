//?-------------------IMPORTACIONES-------------------------

const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;
const shortRecipeDetail = require("../functions/shortRecipeDetail");

//?-------------------FUNCIÓN-------------------------

const getDetailRecipeAPI = async (recipeId) => {
  const response = await axios.get(
    `${API_URL}/recipes/${recipeId}/information?apiKey=${API_KEY}`
  );

  const recipeDetailLarge = response.data;
  const shortRecipe = shortRecipeDetail(recipeDetailLarge);
  return shortRecipe;
};

module.exports = getDetailRecipeAPI;
