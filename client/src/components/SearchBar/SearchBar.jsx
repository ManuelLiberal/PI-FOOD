import { useState } from "react";
import style from "./SearchBar.module.css";
import { getSearchedRecipes } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SearchBar = ({ onSearch }) => {
  //!Declaro el estado del id, que tiene que actualizarse cada vez que se modifique el input
  //!Declaro tambien la función que va a manejar y a estar atenta al cambio de valor en el imput

  const [input, setInput] = useState("");
  // const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSearchedRecipes(input));
    setInput("");
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          onChange={handleChange}
          placeholder="Search recipe..."
          value={input}
          onClick={() => setInput("")}
        />
        <button className={style.button} type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
