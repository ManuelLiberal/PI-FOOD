//?-------------------IMPORTACIONES-------------------------

const postRecipe = require("../controllers/postRecipe");

//?-------------------FUNCIÓN-------------------------

const postRecipeHandler = async (req, res) => {
  //Identifico las propiedades
  try {
    const { title, image, summary, healthScore, analyzedInstructions, diets } =
      req.body;
    const recipe = {
      title,
      image,
      summary,
      healthScore,
      analyzedInstructions,
      diets,
    };
    const newRecipe = await postRecipe(recipe);
    return res.status(200).json(newRecipe);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = postRecipeHandler;
