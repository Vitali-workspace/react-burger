import requestApi from "../../utils/request-api";
export const REPLACE_BUN = 'REPLACE_BUN';
export const SELECT_TAB = 'SELECT_TAB';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';
export const INCREASE_INGREDIENT = 'INCREASE_INGREDIENT';


export function getIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    requestApi.getIngredients()
      .then((response) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: response.data.map(ingredient => ({ ...ingredient, quantity: 0 })),
        })
      })
      .catch(() => {
        dispatch({ type: GET_INGREDIENTS_ERROR })
      })
  }
}