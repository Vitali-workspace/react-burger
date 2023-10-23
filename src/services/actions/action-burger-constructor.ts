import { TBun, IIngredientConstructor } from "../types/services-types";

export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';
export const SELECT_BUNS: 'SELECT_BUNS' = 'SELECT_BUNS';
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT: 'REMOVE_INGREDIENT' = 'REMOVE_INGREDIENT';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';


export interface IActionMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IActionSelectBuns {
  readonly type: typeof SELECT_BUNS;
  readonly bun: TBun;
}

export interface IActionAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: IIngredientConstructor;
}

export interface IActionRemoveIngredient {
  readonly type: typeof REMOVE_INGREDIENT;
  readonly uuid: string;
}

export interface IActionClearConstructor {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TActionsBurgerConstructor =
  | IActionMoveIngredient
  | IActionSelectBuns
  | IActionAddIngredient
  | IActionRemoveIngredient
  | IActionClearConstructor;


export const actionMoveIngredient = (dragIndex: number, hoverIndex: number): IActionMoveIngredient => ({
  type: MOVE_INGREDIENT,
  dragIndex,
  hoverIndex,
});

export const actionSelectBuns = (bun: TBun): IActionSelectBuns => ({ type: SELECT_BUNS, bun });

export const actionAddIngredient = (ingredient: IIngredientConstructor): IActionAddIngredient => ({
  type: ADD_INGREDIENT,
  ingredient,
});

export const actionRemoveIngredient = (uuid: string): IActionRemoveIngredient => ({ type: REMOVE_INGREDIENT, uuid });

export const actionClearConstructor = (): IActionClearConstructor => ({ type: CLEAR_CONSTRUCTOR });

