//?-----------------IMPORTACIONES----------------------

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { getRecipeDetail, cleanDetail } from "../../redux/actions";
import Instructions from "../Instructions/Instructions";
import Summary from "../Summary/Summary";
import Diets from "../Diets/Diets";

const Detail = () => {
  const linkImageDbb =
    "https://media.istockphoto.com/id/910234758/es/vector/se%C3%B1al-de-corte-de-alimentos.jpg?s=612x612&w=0&k=20&c=c5YCIouZo2toL2mn0ESDSO5OcxgDnDRhr5FWBNxBNlc=";
  const recipe = useSelector((state) => state.recipeDetail); //guardo en recipe la propiedad de mi estado global
  const { recipeId } = useParams(); //desestructuro el param del link
  const dispatch = useDispatch();

  useEffect(() => {
    //*Cuando se monte el componente que suceda lo siguiente:
    dispatch(getRecipeDetail(recipeId));
    return () => {
      //*cuando se desmonte que haga esto
      dispatch(cleanDetail());
    };
  }, [recipeId]); //* y que se vuelva a montar cuando esto se modifique
  return (
    <div className={style.container}>
      {recipe.title ? (
        <section className={style.card}>
          <h2 className={style.title}>{recipe.title}</h2>
          <div className={style.info}>
            <div className={style.left}>
              <p className={style.id}>ID: {recipe.id}</p>
              <p className={style.subtitle}>
                {" "}
                HEALTH SCORE: {recipe.healthScore}
              </p>
              <Summary summary={recipe.summary} />
              <Instructions steps={recipe.analyzedInstructions} />
              <Diets dietsApi={recipe.diets} dietsDbb={recipe.Diets} />
            </div>
            <div className={style.right}>
              {Number(recipe.id) ? (
                <img
                  src={recipe.image}
                  alt={`${recipe.id}.img`}
                  className={style.img}
                />
              ) : (
                <img
                  src={linkImageDbb}
                  alt={`${recipe.id}.img`}
                  className={style.img}
                />
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          <h3 className={style.load}>Loading...</h3>
        </>
      )}
    </div>
  );
};

export default Detail;
