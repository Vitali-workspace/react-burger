import { TActionsWebSocket } from "../actions/action-web-socket";
import { TOrders } from "../types/services-types";

export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_ORDERS = "WS_GET_ORDERS";


interface IStateWS {
  wsConnected: boolean;
  orders: TOrders;
  userOrders: TOrders;
  total: number;
  totalToday: number;
  loading: boolean;
  error?: Event;
}

export const initialState: IStateWS = {
  wsConnected: false,
  orders: [],
  userOrders: [],
  total: 0,
  totalToday: 0,
  loading: false,
};


export const reducerWebSocket = (state = initialState, action: TActionsWebSocket): IStateWS => {

  switch (action.type) {

    case WS_GET_ORDERS: {
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders ? action.payload.orders : state.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        loading: false,
      };
    }
    case WS_CONNECTION_START: {
      return { ...state, loading: true }
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        loading: false,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
        loading: false,
      };
    }
    default: { return state }
  }
}
