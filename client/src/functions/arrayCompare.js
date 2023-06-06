const sonIguales = (arrayA, arrayB) => {
  // Verificar longitud de los arrays
  if (arrayA?.length !== arrayB?.length) {
    return false; // Si no tienen la misma longitud, no son iguales
  }

  // Comparar elementos uno a uno
  for (let i = 0; i < arrayA?.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false; // Si algún elemento es diferente, no son iguales
    }
  }

  return true; // Si llegamos hasta aquí, todos los elementos son iguales
};
export default sonIguales;
