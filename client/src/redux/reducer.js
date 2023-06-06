import orderName from "../functions/orderName";
import {
  CLEAN_DETAIL,
  FILTER_BY_DIET,
  FILTER_BY_ORIGIN,
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_RECIPE_DETAIL,
  GET_SEARCHED_RECIPES,
  ORDER_BY_HEALTH_SCORE,
  ORDER_BY_NAME,
  filterByDiet,
} from "./actions";

const initialState = {
  allRecipes: [],
  recipes: [],
  recipeDetail: {},
  diets: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
        recipes: action.payload,
      };
    case GET_SEARCHED_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        recipeDetail: {},
      };
    case ORDER_BY_NAME:
      return {
        ...state,
        recipes:
          action.payload === "ascendente"
            ? orderName([...state.recipes])
            : orderName([...state.recipes]).reverse(),
      };

    case ORDER_BY_HEALTH_SCORE:
      return {
        ...state,
        recipes:
          action.payload === "más saludable"
            ? [...state.recipes].sort((a, b) => b.healthScore - a.healthScore)
            : [...state.recipes].sort((a, b) => a.healthScore - b.healthScore),
      };

    case FILTER_BY_DIET:
      const recipesTypesDiets = state.allRecipes;
      const filterByDiets =
        action.payload === "All"
          ? state.allRecipes
          : recipesTypesDiets.filter((recipe) => {
              return recipe.diets?.includes(action.payload);
            });
      return {
        ...state,
        recipes: filterByDiets,
      };

    case FILTER_BY_ORIGIN:
      const recipesOrigin = state.allRecipes;
      const filterByOrigin =
        action.payload === "api"
          ? recipesOrigin.filter((recipe) => Number(recipe.id))
          : recipesOrigin.filter((recipe) => !Number(recipe.id));
      return {
        ...state,
        recipes: filterByOrigin,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
