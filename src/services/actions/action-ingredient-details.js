export const REJECT_INGREDIENT = 'REJECT_INGREDIENT';
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const CLOSE_MODAL_INGREDIENT_DETAILS = 'CLOSE_MODAL_INGREDIENT_DETAILS';
export const OPEN_MODAL_INGREDIENT_DETAILS = 'OPEN_MODAL_INGREDIENT_DETAILS';


export function selectIngredient(ingredient) {
  return {
    type: SELECT_INGREDIENT,
    selectedIngredient: ingredient,
  };
}