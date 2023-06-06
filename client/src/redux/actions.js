import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_SEARCHED_RECIPES = "GET_SEARCHED_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_HEALTH_SCORE = "ORDER_BY_HEALTHSCORE";
export const CLEAN_RECIPES_BY_NAME = "CLEAN_RECIPES_BY_NAME";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPE = "POST_RECIPE";
const URL_BASE = "http://localhost:3001";

//?-----------ACTIONS HANDLERS----------------------

export const getAllRecipes = () => {
  return async function (dispatch) {
    const { data } = await axios.get(`${URL_BASE}/recipes`);
    dispatch({ type: GET_ALL_RECIPES, payload: data });
  };
};
export const getSearchedRecipes = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${URL_BASE}/recipes/?query=${name}`);
      dispatch({ type: GET_SEARCHED_RECIPES, payload: data });
    } catch (error) {
      alert("La búsqueda no arrojó ningún resultado");
    }
  };
};
export const getRecipeDetail = (id) => {
  return async function (dispatch) {
    const { data } = await axios.get(`${URL_BASE}/recipes/${id}`);

    dispatch({ type: GET_RECIPE_DETAIL, payload: data });
  };
};
export const getDiets = () => {
  return async function (dispatch) {
    const { data } = await axios.get(`${URL_BASE}/diets`);
    dispatch({ type: GET_DIETS, payload: data });
  };
};

export const createRecipe = (recipe) => {
  return async function (dispatch) {
    const data = await axios.post(`${URL_BASE}/recipes`, recipe);
    dispatch({ type: POST_RECIPE, payload: data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL }; //NO HACE FALTA EL ID PQ SE SABE QUE EN ESA PROPIEDA ESTA GUARDADA LA RECIPE QUE QUEREMOS LIMPIAR
};
export const cleanRecipesByName = () => {
  return { type: CLEAN_RECIPES_BY_NAME }; //NO HACE FALTA EL ID PQ SE SABE QUE EN ESA PROPIEDA ESTA GUARDADA LA RECIPE QUE QUEREMOS LIMPIAR
};
export const filterByDiet = (diet) => {
  return { type: FILTER_BY_DIET, payload: diet };
};
export const filterByOrigin = (origin) => {
  return { type: FILTER_BY_ORIGIN, payload: origin };
};
export const orderByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order };
};
export const orderByHealthScore = (score) => {
  return { type: ORDER_BY_HEALTH_SCORE, payload: score };
};
