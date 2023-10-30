import {
  GET_ORDER_DETAILS_ERROR,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  CLOSE_MODAL_ORDER_DETAILS,
  OPEN_ORDER_DETAILS_MODAL,
} from "../actions/action-order-details";
import { TActionsOrderDetails } from "../actions/action-order-details";


interface IStateOrderDetails {
  orderId: string,
  openModal: boolean,
  orderDetailsRequest: boolean,
  orderDetailsError: boolean,
}


export const initialState: IStateOrderDetails = {
  orderId: '',
  openModal: false,
  orderDetailsRequest: false,
  orderDetailsError: false,
};


export const reducerOrderDetails = (state = initialState, action: TActionsOrderDetails): IStateOrderDetails => {

  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST: {
      return { ...state, orderDetailsRequest: true }
    }
    case GET_ORDER_DETAILS_ERROR: {
      return {
        ...state,
        orderDetailsRequest: false,
        orderDetailsError: true,
        orderId: "",
      }
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        orderDetailsRequest: false,
        orderDetailsError: false,
        orderId: action.orderId,
      }
    }
    case CLOSE_MODAL_ORDER_DETAILS: {
      return { ...state, openModal: false }
    }
    case OPEN_ORDER_DETAILS_MODAL: {
      return { ...state, openModal: true }
    }
    default: {
      return state;
    }
  }
};
