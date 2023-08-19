import { NAMES_INGREDIENTS, TYPE_INGREDIENT, } from "../../utils/constants";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_SUCCESS,
  INCREASE_INGREDIENT,
  DECREASE_INGREDIENT,
  REPLACE_BUN,
  SELECT_TAB,
} from "../actions/action-burger-ingredients";


const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsError: false,
  tab: NAMES_INGREDIENTS.BUN,
};


export const reducerBurgerIngredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsError: true,
        ingredients: [],
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsError: false,
        ingredients: action.ingredients
      };
    }
    case REPLACE_BUN: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          if (ingredient.type === TYPE_INGREDIENT.BUN) {
            if (ingredient._id === action._id) {
              return { ...ingredient, quantity: 2 };
            } else {
              return { ...ingredient, quantity: 0 };
            }
          } else {
            return ingredient;
          }
        })
      }
    }
    case SELECT_TAB: {
      return { ...state, tab: action.tab }
    }
    case INCREASE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action._id ? { ...ingredient, quantity: ++ingredient.quantity } : ingredient;
        })
      }
    }
    case DECREASE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => {
          return ingredient._id === action._id ? { ...ingredient, quantity: --ingredient.quantity } : ingredient;
        })
      }
    }
    default: {
      return state;
    }
  }
};