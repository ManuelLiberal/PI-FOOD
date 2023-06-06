//?-------------------IMPORTACIONES-------------------------

const getAllDiets = require("../controllers/getAllDiets");

//?-------------------FUNCIÓN-------------------------

const getAllDietsHandler = async (req, res) => {
  try {
    const diets = await getAllDiets();
    return res.status(200).json(diets);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = getAllDietsHandler;
