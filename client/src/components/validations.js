const validations = (form, errorsState) => {
  const errors = { ...errorsState };
  //*TITLE
  if (!form.title) {
    errors.title = "Por favor ingresa el nombre de tu receta";
  } else errors.title = "";
  //*SUMMARY

  if (!form.summary) {
    errors.summary = "Por favor agrega un resumen de la receta";
  } else if (form.summary.length < 30) {
    errors.summary = "Debe contener al menos 30 caracteres";
  } else if (form.summary.length > 1000) {
    errors.summary = "Superó el máximo de 1000 caracteres";
  } else errors.summary = "";

  //*HEALTH SCORE
  if (form.healthScore < 1 || form.healthScore > 100) {
    errors.healthScore =
      "Este numero tiene que tener un puntaje que vaya del 1 al 100";
  } else errors.healthScore = "";

  //*INSTRUCTIONS
  if (!form.analyzedInstructions) {
    errors.analyzedInstructions =
      "Por favor agrega el paso a paso de tu receta";
  } else if (form.analyzedInstructions.length < 30) {
    errors.analyzedInstructions = "Debe contener al menos 30 caracteres";
  } else if (form.analyzedInstructions.length > 1000) {
    errors.analyzedInstructions = "Superó el máximo de 1100 caracteres";
  } else errors.analyzedInstructions = "";
  return errors;
};

export default validations;
