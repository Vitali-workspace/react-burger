import { combineReducers } from "redux";
import { reducerBurgerConstructor } from "./reducer-burger-constructor";
import { reducerBurgerIngredients } from "./reducer-burger-ingredients";
import { reducerIngredientDetails } from "./reducer-ingredient-details";
import { reducerOrderDetails } from "./reducer-order-details";

export const rootReducer = combineReducers({
  ingredientDetails: reducerIngredientDetails,
  burgerIngredients: reducerBurgerIngredients,
  burgerConstructor: reducerBurgerConstructor,
  orderDetails: reducerOrderDetails,
});