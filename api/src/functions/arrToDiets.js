//?-------------------FUNCIÓN-------------------------

const arrToDiets = (arrDiets) => {
  const dietsAPI = [];
  for (let i = 0; i < arrDiets.length; i++) {
    const diet = { name: arrDiets[i] };
    dietsAPI.push(diet);
  }
  return dietsAPI;
};
module.exports = arrToDiets;
