import style from "./Diets.module.css";
const Diets = ({ dietsApi, dietsDbb }) => {
  return (
    <section>
      <h3 className={style.title}>Diets</h3>
      <div className={style.container}>
        {dietsApi &&
          dietsApi.map((diet) => {
            return (
              <div className={style.diet_container}>
                <span className={style.type_diet}>{diet}</span>
              </div>
            );
          })}
        {dietsDbb &&
          dietsDbb.map((diet) => {
            return (
              <div className={style.diet_container}>
                <span className={style.type_diet}>{diet.name}</span>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default Diets;
