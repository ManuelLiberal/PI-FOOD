//?-------------------IMPORTACIONES-------------------------

const getDietsRecipe = require("./getDietsRecipe");
const shortInstructions = require("./shortInstructions");

//?-------------------FUNCIÓN-------------------------

const shortRecipeDetail = ({
  id,
  title,
  summary,
  healthScore,
  analyzedInstructions,
  image,
  diets,
  vegan,
  vegetarian,
  glutenFree,
}) => {
  const recipe = {
    id,
    title,
    summary,
    healthScore,
    analyzedInstructions: shortInstructions(analyzedInstructions),
    image,
    diets: getDietsRecipe(diets, vegan, vegetarian, glutenFree),
  };
  return recipe;
};

module.exports = shortRecipeDetail;
