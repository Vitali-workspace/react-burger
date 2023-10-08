import { IIngredientInfo } from "../types/services-types";

export const REJECT_INGREDIENT: 'REJECT_INGREDIENT' = 'REJECT_INGREDIENT';
export const SELECT_INGREDIENT: 'SELECT_INGREDIENT' = 'SELECT_INGREDIENT';
export const CLOSE_MODAL_INGREDIENT_DETAILS: 'CLOSE_MODAL_INGREDIENT_DETAILS' = 'CLOSE_MODAL_INGREDIENT_DETAILS';
export const OPEN_MODAL_INGREDIENT_DETAILS: 'OPEN_MODAL_INGREDIENT_DETAILS' = 'OPEN_MODAL_INGREDIENT_DETAILS';

export interface IActionRejectIngredient {
  readonly type: typeof REJECT_INGREDIENT;
}

export interface IActionSelectIngredient {
  readonly type: typeof SELECT_INGREDIENT;
  readonly selectedIngredient: IIngredientInfo;
}

export interface IActionCloseModalDetails {
  readonly type: typeof CLOSE_MODAL_INGREDIENT_DETAILS;
}

export interface IActionOpenModalDetails {
  readonly type: typeof OPEN_MODAL_INGREDIENT_DETAILS;
}

export type TActionsIngredientDetails =
  | IActionRejectIngredient
  | IActionSelectIngredient
  | IActionCloseModalDetails
  | IActionOpenModalDetails;


export const actionRejectIngredient = (): IActionRejectIngredient => ({ type: REJECT_INGREDIENT });

export const actionSelectIngredient = (selectedIngredient: IIngredientInfo): IActionSelectIngredient => ({
  type: SELECT_INGREDIENT,
  selectedIngredient,
});

export const actionCloseModalDetails = (): IActionCloseModalDetails => ({ type: CLOSE_MODAL_INGREDIENT_DETAILS });

export const actionOpenModalDetails = (): IActionOpenModalDetails => ({ type: OPEN_MODAL_INGREDIENT_DETAILS });
