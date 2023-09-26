import RequestApi from "../../utils/request-api";

export const OPEN_ORDER_DETAILS_MODAL = 'OPEN_ORDER_DETAILS_MODAL';
export const CLOSE_MODAL_ORDER_DETAILS = 'CLOSE_MODAL_ORDER_DETAILS';
export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
export const GET_ORDER_DETAILS_ERROR = 'GET_ORDER_DETAILS_ERROR';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';


export function actionOrderDetails(order: any) {
  return function (dispatch: any) {
    dispatch({ type: GET_ORDER_DETAILS_REQUEST });

    RequestApi.getOrderNumber(order)
      .then((response) => {
        dispatch({
          type: GET_ORDER_DETAILS_SUCCESS,
          orderId: response.order.number.toString(),
        });
        dispatch({ type: OPEN_ORDER_DETAILS_MODAL });
      })
      .catch(() => {
        dispatch({ type: GET_ORDER_DETAILS_ERROR })
      })
  }
}