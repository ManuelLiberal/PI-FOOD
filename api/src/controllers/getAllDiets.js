//?-------------------IMPORTACIONES-------------------------

const getDietsAPI = require("./getDietsAPI");
const dietsToDatabase = require("./dietsToDatabase");
const arrToDiets = require("../functions/arrToDiets");
const getDietsDatabase = require("./getDietsDatabase");

//?-------------------FUNCIÓN-------------------------

//*Esta función se encarga de obtener las dietas. Existen dos posibles acciones según la condición.
//* 1 - La base de datos ya las tiene por las obtengo directamente de ahi
//* 2 - La base de datos está vacía por lo que se tiene que obtener las dietas a través de la api y       luego almacenarlas en la base de datos, para después realizar la acción 1.

const getAllDiets = async () => {
  const arr = await getDietsDatabase();
  if (!arr.length) {
    const arrDietsAPI = await getDietsAPI(); //se obtiene un array de dietas de la api
    const dietsAPI = arrToDiets(arrDietsAPI); //se acondiciona el array para trasladarlo al modelo
    const diets = await dietsToDatabase(dietsAPI);
    return diets; //se devuelve las dietas almacenadas en la base de datos
  }
  return arr;
};

module.exports = getAllDiets;
