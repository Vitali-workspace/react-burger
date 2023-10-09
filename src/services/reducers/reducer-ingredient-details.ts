import {
  REJECT_INGREDIENT,
  SELECT_INGREDIENT,
  CLOSE_MODAL_INGREDIENT_DETAILS,
  OPEN_MODAL_INGREDIENT_DETAILS,
} from "../actions/action-ingredient-details";
import { TActionsIngredientDetails } from "../actions/action-ingredient-details";
import { IIngredientInfo } from "../types/services-types";

interface IStateIngredientDetails {
  selectedIngredient: IIngredientInfo | null,
  openModal: boolean,
}

const initialState: IStateIngredientDetails = { selectedIngredient: null, openModal: false };


export const reducerIngredientDetails = (state = initialState, action: TActionsIngredientDetails): IStateIngredientDetails => {
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
