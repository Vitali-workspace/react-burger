import RequestApi from "../../utils/request-api";
import { actionClearConstructor } from "./action-burger-constructor";
import { actionClearQuantity } from "./action-burger-ingredients";
import { AppDispatch, AppThunkAction } from "../types/services-types";


export const OPEN_ORDER_DETAILS_MODAL = 'OPEN_ORDER_DETAILS_MODAL';
export const CLOSE_MODAL_ORDER_DETAILS = 'CLOSE_MODAL_ORDER_DETAILS';
export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
export const GET_ORDER_DETAILS_ERROR = 'GET_ORDER_DETAILS_ERROR';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';

export interface IActionOpenOrderModal {
  readonly type: typeof OPEN_ORDER_DETAILS_MODAL;
}

export interface IActionCloseModalOrder {
  readonly type: typeof CLOSE_MODAL_ORDER_DETAILS;
}

export interface IActionGetOrderRequest {
  readonly type: typeof GET_ORDER_DETAILS_REQUEST;
}

export interface IActionGetOrderError {
  readonly type: typeof GET_ORDER_DETAILS_ERROR;
}

export interface IActionGetOrderSuccess {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
  readonly orderId: string;
}

export type TActionsOrderDetails =
  | IActionOpenOrderModal
  | IActionCloseModalOrder
  | IActionGetOrderRequest
  | IActionGetOrderError
  | IActionGetOrderSuccess;


export const actionOpenOrderModal = (): IActionOpenOrderModal => ({ type: OPEN_ORDER_DETAILS_MODAL });

export const actionCloseModalOrder = (): IActionCloseModalOrder => ({ type: CLOSE_MODAL_ORDER_DETAILS });

export const actionGetOrderRequest = (): IActionGetOrderRequest => ({ type: GET_ORDER_DETAILS_REQUEST });

export const actionGetOrderError = (): IActionGetOrderError => ({ type: GET_ORDER_DETAILS_ERROR });

export const actionGetOrderSuccess = (orderId: string): IActionGetOrderSuccess => ({
  type: GET_ORDER_DETAILS_SUCCESS,
  orderId,
});



export const actionOrderDetails: AppThunkAction = (order) => (dispatch: AppDispatch) => {
  dispatch(actionGetOrderRequest());

  RequestApi.getOrderNumber(order)
    .then((response) => {
      const order = response.order.number.toString();
      dispatch(actionGetOrderSuccess(order));
      dispatch(actionOpenOrderModal());
      dispatch(actionClearQuantity());
      dispatch(actionClearConstructor());
    })
    .catch(() => {
      dispatch(actionGetOrderError());
    })
}
