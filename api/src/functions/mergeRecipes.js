//?-------------------FUNCIÓN-------------------------

const mergeRecipes = (recipesDBB, recipesAPI) => {
  const recipes = [...recipesDBB, ...recipesAPI];
  return recipes;
};

module.exports = mergeRecipes;
