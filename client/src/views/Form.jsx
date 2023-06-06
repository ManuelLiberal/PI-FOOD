//?--------------IMPORTACIONES-----------------
import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, createRecipe } from "../redux/actions";
import { useHistory } from "react-router-dom";
import validations from "../components/validations";

//?--------------COMPONENTE--------------------

const Form = () => {
  //*---------------HOOKS---------

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, []);
  const diets = useSelector((state) => state.diets);

  //*-------------ESTADOS-------------

  //*---FORMULARIO---
  const [form, setForm] = useState({
    title: "",
    healthScore: "",
    summary: "",
    analyzedInstructions: "",
    diets: [],
    image: "",
  });
  //*---ERRORES----
  const [errors, setErrors] = useState({
    title: "",
    healthScore: "",
    summary: "",
    analyzedInstructions: "",
    image: "",
  });

  //*--------HANDLERS------------

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(createRecipe(form));
    alert("Receta creada exitosamente");
    //limpio el form
    setForm({
      title: "",
      summary: "",
      diets: [],
      image: "",
      healthScore: "",
      analyzedInstructions: "",
    });
    history.push("/home");
  };
  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validations({ ...form, [property]: value }, errors));
  };
  const handleCheck = (event) => {
    if (event.target.checked) {
      //se agregan las dietas
      setForm({
        ...form,
        diets: [...form.diets, event.target.value],
      });
    } else {
      //se borran las dietas
      setForm({
        ...form,
        diets: form.diets.filter((d) => d !== event.target.value),
      });
    }
  };
  //*--------------RENDERIZADO----------
  return (
    <div className={style.body}>
      <form onSubmit={handlerSubmit} className={style.container}>
        <div className={style.input_container}>
          <label className={style.title} htmlFor="title">
            Nombre de la receta
          </label>
          <input
            name="title"
            type="text"
            value={form.title}
            placeholder="Nombre"
            onChange={handlerChange}
          />
          <p className={style.error}>{errors.title}</p>
        </div>
        <div className={style.input_container}>
          <label className={style.title} htmlFor="image">
            Imagen
          </label>
          <input
            placeholder="www.img.jpg"
            disabled
            type="text"
            defaultValue="www.img.jpg"
            value={form.image}
            name="image"
            onChange={handlerChange}
          />
        </div>
        {/* ---Summary----- */}
        <div className={style.input_container}>
          <label className={style.title} htmlFor="summary">
            Resumen de la receta
          </label>
          <input name="summary" value={form.summary} onChange={handlerChange} />
          <p className={style.error}>{errors.summary}</p>
        </div>
        <div className={style.input_container}>
          <label className={style.title} htmlFor="healthScore">
            HealthScore
          </label>
          <input
            name="healthScore"
            type="number"
            value={form.healthScore}
            onChange={handlerChange}
            min="1"
            max="100"
            placeholder="1-100"
          />
          <p className={style.error}>{errors.healthScore}</p>
        </div>
        <div className={style.input_container}>
          <label className={style.title} htmlFor="analyzedInstructions">
            Instructions
          </label>
          <input
            type="text"
            value={form.analyzedInstructions}
            onChange={handlerChange}
            name="analyzedInstructions"
          />
          <p className={style.error}>{errors.analyzedInstructions}</p>
        </div>
        <div className={style.input_container}>
          <label className={style.title}>
            Selecciona las dietas a las que pertenece
          </label>
          <div className={style.input_container_row}>
            {diets.map((diet) => (
              <div>
                <input
                  type="checkbox"
                  value={diet.id}
                  name={diet.name}
                  onChange={handleCheck}
                  // checked={diets.lenght}
                />
                <label className={style.label_diet} htmlFor={diet.name}>
                  {" "}
                  {diet.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button
          className={style.button}
          type="submit"
          // disabled={Object.values(errors).filter((e) => e !== "")}
          disabled={Object.values(errors).find((error) => error !== "")}
        >
          CREAR RECETA
        </button>
      </form>
    </div>
  );
};
export default Form;
