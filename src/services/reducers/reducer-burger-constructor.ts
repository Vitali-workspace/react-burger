import { ADD_INGREDIENT, MOVE_INGREDIENT, REMOVE_INGREDIENT, SELECT_BUNS } from "../actions/action-burger-constructor";
import { IIngredientInfo, TBun } from "../types/services-types";
import { TActionsBurgerConstructor } from "../actions/action-burger-constructor";

interface IStateBurgerConstructor {
  ingredients: IIngredientInfo[];
  bun: TBun;
};

const initialState: IStateBurgerConstructor = { ingredients: [], bun: null };


export const reducerBurgerConstructor = (state = initialState, action: TActionsBurgerConstructor): IStateBurgerConstructor => {
  switch (action.type) {
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((ingredient) => ingredient.uuid !== action.uuid)
      }
    }
    case ADD_INGREDIENT: {
      return { ...state, ingredients: [action.ingredient, ...state.ingredients] }
    }
    case SELECT_BUNS: {
      return { ...state, bun: action.bun }
    }
    case MOVE_INGREDIENT: {
      const newIngredients = [...state.ingredients];
      [newIngredients[action.dragIndex], newIngredients[action.hoverIndex]] = [newIngredients[action.hoverIndex], newIngredients[action.dragIndex]];
      return { ...state, ingredients: newIngredients }
    }
    default: {
      return state;
    }
  }
};
