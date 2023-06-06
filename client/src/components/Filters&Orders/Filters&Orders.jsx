import { useState, useEffect } from "react";
import style from "./Filters&Orders.module.css";
import {
  filterByDiet,
  filterByOrigin,
  getAllRecipes,
  orderByHealthScore,
  orderByName,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FiltersAndOrders = ({ resetCurrentPage }) => {
  //*---------------HOOKS---------
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  //*--------HANDLERS------------
  const handleSelect = (event) => {
    dispatch(filterByDiet(event.target.value));
    resetCurrentPage();
  };
  const handleClick = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    if (inputName === "Todas") {
      dispatch(getAllRecipes());
    }
    if (inputName === "order") {
      dispatch(orderByName(inputValue));
    }
    if (inputName === "score") {
      dispatch(orderByHealthScore(inputValue));
    }
    if (inputName === "origin") {
      dispatch(filterByOrigin(inputValue));
    }
    resetCurrentPage();
  };

  //*--------------RENDERIZADO----------

  return (
    <div className={style.container}>
      <div className={style.orders_containers}>
        <div className={style.container_type}>
          <h3 className={style.title}>Nombre</h3>
          <input
            type="button"
            value="ascendente"
            name="order"
            onClick={handleClick}
            className={style.button}
          />
          {/* <label htmlFor="order">[A-Z]</label> */}
          <input
            type="button"
            value="descendente"
            name="order"
            onClick={handleClick}
            className={style.button}
          />
          {/* <label htmlFor="order"> [Z-A]</label> */}
        </div>
        <div className={style.container_type}>
          <h3 className={style.title}>Health Score</h3>
          <input
            type="button"
            value="más saludable"
            name="score"
            onClick={handleClick}
            className={style.button}
          />
          {/* <label htmlFor="score">Más sano</label> */}
          <input
            type="button"
            value="menos saludable"
            name="score"
            onClick={handleClick}
            className={style.button}
          />
          {/* <label htmlFor="score">Menos Sano</label> */}
        </div>
      </div>
      <div className={style.filters_containers}>
        <div className={style.container_type}>
          <h3 className={style.title}>Origen</h3>
          <input
            type="button"
            value="database"
            name="origin"
            onClick={handleClick}
            className={style.button}
          />
          {/* <label htmlFor="origin">Database</label> */}
          <input
            type="button"
            value="api"
            name="origin"
            onClick={handleClick}
            className={style.button}
          />
          <input
            type="button"
            value="Todas"
            name="Todas"
            onClick={handleClick}
            className={style.button}
          />
          {/* <label htmlFor="origin"> Api</label> */}
        </div>
        <div>
          <h3 className={style.title}>Tipo de dieta</h3>
          <select className={style.button} onChange={handleSelect}>
            <option className={style.button} defaultValue="All">
              All
            </option>
            {diets.map((diet) => {
              return (
                <option className={style.button} value={diet.name}>
                  {diet.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
export default FiltersAndOrders;
