//?-------------------FUNCIÓN-------------------------

const getDietsRecipe = (arrDiets, vegan, vegetarian, glutenFree) => {
  if (vegan) arrDiets.push("vegan");
  if (vegetarian) arrDiets.push("vegetarian");
  if (glutenFree) arrDiets.push("gluten free");
  //y para que no haya repetidas..
  const diets = Array.from(new Set(arrDiets));
  return diets;
};
module.exports = getDietsRecipe;
