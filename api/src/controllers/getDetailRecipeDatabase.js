//?-------------------IMPORTACIONES-------------------------

const { Recipe, Diet } = require("../db");

//?-------------------FUNCIÓN-------------------------

const getDetailRecipeDatabase = async (recipeId) => {
  const recipeDetail = await Recipe.findByPk(recipeId, {
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return recipeDetail;
};

module.exports = getDetailRecipeDatabase;
