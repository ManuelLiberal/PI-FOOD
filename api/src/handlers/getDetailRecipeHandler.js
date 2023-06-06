//?-------------------IMPORTACIONES-------------------------

const getDetailRecipeDatabase = require("../controllers/getDetailRecipeDatabase");
const getDetailRecipeAPI = require("../controllers/getDetailRecipeAPI");

//?-------------------FUNCIÓN-------------------------

const getDetailRecipeHandler = async (req, res) => {
  const { id } = req.params;

  //* Busca el detalle en la api
  if (Number(id)) {
    try {
      const recipeAPI = await getDetailRecipeAPI(id);
      return res.status(200).json(recipeAPI);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  //* Busca el detalle en la base de datos
  else {
    try {
      const recipeDatabase = await getDetailRecipeDatabase(id);
      return res.status(200).json(recipeDatabase);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
module.exports = getDetailRecipeHandler;
