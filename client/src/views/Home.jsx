//?-------------IMPORTACIONES---------------
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getDiets } from "../redux/actions";
import CardsContainer from "../components/CardsContainer/CardsContainer";

//?-------------COMPONENTE---------------

const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, []);

  return (
    <div className={style.container}>
      <CardsContainer recipes={recipes} />
    </div>
  );
};

export default Home;
