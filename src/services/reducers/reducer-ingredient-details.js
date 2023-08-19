import {
  REJECT_INGREDIENT,
  SELECT_INGREDIENT,
  CLOSE_MODAL_INGREDIENT_DETAILS,
  OPEN_MODAL_INGREDIENT_DETAILS,
} from "../actions/action-ingredient-details";

const initialState = { selectedIngredient: null, openModal: false };

export const reducerIngredientDetails = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INGREDIENT: {
      return { ...state, selectedIngredient: action.selectedIngredient }
    }
    case REJECT_INGREDIENT: {
      return { ...state, selectedIngredient: null }
    }
    case CLOSE_MODAL_INGREDIENT_DETAILS: {
      return { ...state, openModal: false }
    }
    case OPEN_MODAL_INGREDIENT_DETAILS: {
      return { ...state, openModal: true }
    }
    default: {
      return state;
    }
  }
};