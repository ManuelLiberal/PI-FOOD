//?-------------------IMPORTACIONES-------------------------

const getDietsRecipe = require("./getDietsRecipe");

//?-------------------FUNCIÓN-------------------------

const mapRecipes = (recipes) => {
  const shortRecipes = [];
  recipes.map(
    ({
      id,
      title,
      image,
      healthScore,
      diets,
      vegan,
      vegetarian,
      glutenFree,
    }) => {
      const newRecipe = {
        id,
        title,
        image,
        healthScore,
        diets: getDietsRecipe(diets, vegan, vegetarian, glutenFree),
      };
      shortRecipes.push(newRecipe);
    }
  );
  return shortRecipes;
};
module.exports = mapRecipes;
