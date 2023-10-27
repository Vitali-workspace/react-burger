import {
  GET_ORDER_DETAILS_ERROR,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  CLOSE_MODAL_ORDER_DETAILS,
  OPEN_ORDER_DETAILS_MODAL,
} from "../actions/action-order-details";
import {
  IActionOpenOrderModal,
  IActionCloseModalOrder,
  IActionGetOrderRequest,
  IActionGetOrderError,
  IActionGetOrderSuccess,
} from "../actions/action-order-details";
import { reducerOrderDetails, initialState } from "./reducer-order-details";


describe("orderDetailsReducer", () => {

  it("initialState", () => {
    expect(reducerOrderDetails(undefined, {} as any)).toEqual(initialState);
  });

  it("GET_ORDER_DETAILS_REQUEST", () => {
    const action: IActionGetOrderRequest = { type: GET_ORDER_DETAILS_REQUEST };

    expect(reducerOrderDetails(undefined, action)).toEqual({
      ...initialState,
      orderDetailsRequest: true,
    });
  });

  it("GET_ORDER_DETAILS_SUCCESS", () => {
    const action: IActionGetOrderSuccess = { type: GET_ORDER_DETAILS_SUCCESS, orderId: '12345' };

    expect(reducerOrderDetails(undefined, action)).toEqual({
      ...initialState,
      orderDetailsRequest: false,
      orderDetailsError: false,
      orderId: "12345",
    });
  });

  it("GET_ORDER_DETAILS_ERROR", () => {
    const action: IActionGetOrderError = { type: GET_ORDER_DETAILS_ERROR };

    expect(reducerOrderDetails(undefined, action)).toEqual({
      ...initialState,
      orderDetailsRequest: false,
      orderDetailsError: true,
      orderId: "",
    });
  });

  it("OPEN_ORDER_DETAILS_MODAL", () => {
    const action: IActionOpenOrderModal = { type: OPEN_ORDER_DETAILS_MODAL };

    expect(reducerOrderDetails(undefined, action)).toEqual({
      ...initialState,
      openModal: true,
    });
  });

  it("CLOSE_MODAL_ORDER_DETAILS", () => {
    const action: IActionCloseModalOrder = { type: CLOSE_MODAL_ORDER_DETAILS };

    expect(reducerOrderDetails(undefined, action)).toEqual({
      ...initialState,
      openModal: false,
    });
  });
});

