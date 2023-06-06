const orderByName = (recipes) => {
  recipes.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return recipes;
};
module.exports = orderByName;
