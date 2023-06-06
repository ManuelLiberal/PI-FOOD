//?-------------------IMPORTACIONES-------------------------

const getRecipesDatabase = require("../controllers/getRecipesDatabase");
const getRecipesAPI = require("../controllers/getRecipesAPI");
const mergeRecipes = require("../functions/mergeRecipes");

//?-------------------FUNCIÓN-------------------------

const getAllRecipesHandler = async (req, res) => {
  try {
    const { query } = req.query;
    const recipesAPI = await getRecipesAPI(query);

    const recipesDatabase = await getRecipesDatabase(query);
    const allRecipes = await mergeRecipes(recipesDatabase, recipesAPI);

    res.status(200).json(allRecipes);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getAllRecipesHandler;
