//?-------------------IMPORTACIONES-------------------------

const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");

//?-------------------FUNCIÓN-------------------------

const getRecipesDatabase = async (title) => {
  const recipes = title
    ? await Recipe.findAll({
        where: {
          title: {
            [Op.iLike]: `%${title}%`,
          },
        },
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    : await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
  //yo necesito que la propiedad Diets se convierta en diets, para eso tengo que guardar los datos, borrar la propiedad y crear una nueva con los datos anteriores

  // const diets = [];
  // recipes.map(({ dataValues }) => {
  //   diets.push(dataValues.Diets);
  // });
  // const nuevasDietas = [];
  // diets.map(({ dataValues }) => {
  //   nuevasDietas.push(dataValues.name);
  // });
  // console.log("RECETAS", recipes);
  // delete recipes.Diets;
  // recipes.diets = nuevasDietas;

  // console.log("Dietas resumidas", nuevasDietas);
  return recipes;
};

module.exports = getRecipesDatabase;
