//?---------------IMPORTACIONES--------------------

import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getSearchedRecipes } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const onSearch = (name) => {
    dispatch(getSearchedRecipes(name));
  };
  return (
    <div className={style.mainContainer}>
      <h className={style.name}>Created By Manuel Liberal</h>
      <Link to="/home">
        <h2 className={style.title}>HOME</h2>
      </Link>
      <Link to="/create">
        <h2 className={style.title}>CREATE YOUR RECIPE</h2>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
