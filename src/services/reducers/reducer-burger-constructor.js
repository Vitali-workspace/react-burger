import { ADD_INGREDIENT, MOVE_INGREDIENT, REMOVE_INGREDIENT, SELECT_BUNS } from "../actions/action-burger-constructor";

const initialState = { ingredients: [], bun: null };

export const reducerBurgerConstructor = (state = initialState, action) => {
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