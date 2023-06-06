//?-------------------FUNCIÓN-------------------------

const shortInstructions = (instructions) => {
  const stepsTexts = [];
  const objInst = instructions[0];
  const { steps } = objInst;
  steps.map((st) => {
    stepsTexts.push(st.step);
  });
  return stepsTexts;
};
module.exports = shortInstructions;
