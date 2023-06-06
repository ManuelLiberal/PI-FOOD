//?-------------------IMPORTACIONES-------------------------

const { Recipe } = require("../db");

//?-------------------FUNCIÓN-------------------------

const postRecipe = async ({
  title,
  image,
  summary,
  healthScore,
  analyzedInstructions,
  diets,
}) => {
  const newRecipe = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    analyzedInstructions,
  });
  newRecipe.addDiets(diets);
  return newRecipe;
};
module.exports = postRecipe;
