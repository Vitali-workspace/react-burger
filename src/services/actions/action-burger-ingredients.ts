import RequestApi from "../../utils/request-api";
import { IIngredientCount } from "../types/services-types";
import { AppDispatch, AppThunkAction } from "../types/services-types";

export const REPLACE_BUN: 'REPLACE_BUN' = 'REPLACE_BUN';
export const SELECT_TAB: 'SELECT_TAB' = 'SELECT_TAB';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const DECREASE_INGREDIENT: 'DECREASE_INGREDIENT' = 'DECREASE_INGREDIENT';
export const INCREASE_INGREDIENT: 'INCREASE_INGREDIENT' = 'INCREASE_INGREDIENT';
export const CLEAR_QUANTITY: 'CLEAR_QUANTITY' = 'CLEAR_QUANTITY';

export interface IActionReplaceBun {
  readonly type: typeof REPLACE_BUN;
  readonly _id: string;
}

export interface IActionSelectTab {
  readonly type: typeof SELECT_TAB;
  readonly tab: string;
}

export interface IActionGetIngredientsError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

export interface IActionGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IIngredientCount[];
}

export interface IActionGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IActionDecreaseIngredient {
  readonly type: typeof DECREASE_INGREDIENT;
  readonly _id: string;
}


export interface IActionIncreaseIngredient {
  readonly type: typeof INCREASE_INGREDIENT;
  readonly _id: string;
}

export interface IActionClearQuantity {
  readonly type: typeof CLEAR_QUANTITY;
}


export type TActionsBurgerIngredients =
  | IActionReplaceBun
  | IActionSelectTab
  | IActionGetIngredientsError
  | IActionGetIngredientsSuccess
  | IActionGetIngredientsRequest
  | IActionDecreaseIngredient
  | IActionIncreaseIngredient
  | IActionClearQuantity;


export const actionReplaceBun = (_id: string): IActionReplaceBun => ({ type: REPLACE_BUN, _id });

export const actionSelectTab = (tab: string): IActionSelectTab => ({ type: SELECT_TAB, tab });

export const actionGetIngredientsError = (): IActionGetIngredientsError => ({ type: GET_INGREDIENTS_ERROR });

export const actionGetIngredientsSuccess = (ingredients: IIngredientCount[]): IActionGetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  ingredients,
});

export const actionGetIngredientsRequest = (): IActionGetIngredientsRequest => ({ type: GET_INGREDIENTS_REQUEST });

export const actionDecreaseIngredient = (_id: string): IActionDecreaseIngredient => ({ type: DECREASE_INGREDIENT, _id });

export const actionIncreaseIngredient = (_id: string): IActionIncreaseIngredient => ({ type: INCREASE_INGREDIENT, _id });

export const actionClearQuantity = (): IActionClearQuantity => ({ type: CLEAR_QUANTITY });



export const getIngredients: AppThunkAction = () => (dispatch: AppDispatch) => {
  dispatch(actionGetIngredientsRequest());

  RequestApi.getIngredients()
    .then((response) => {
      const ingredients = response.data.map((ingredient: IIngredientCount) => ({ ...ingredient, quantity: 0 }));
      dispatch(actionGetIngredientsSuccess(ingredients));
    })
    .catch(() => {
      dispatch(actionGetIngredientsError());
    })
};
