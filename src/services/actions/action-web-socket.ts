import { IOrder, IResponseOrders } from "../types/services-types";
export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_ORDER: 'WS_SEND_ORDER' = 'WS_SEND_ORDER';


export interface IWSActionConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly wsUrl: string;
}

export interface IWSActionConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSActionConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSActionConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSActionGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  readonly payload: IResponseOrders;
}

export interface IWSActionSendOrder {
  readonly type: typeof WS_SEND_ORDER;
  readonly payload: IOrder;
}


export type TWSActions =
  | IWSActionConnectionStart
  | IWSActionConnectionSuccess
  | IWSActionConnectionError
  | IWSActionConnectionClosed
  | IWSActionGetOrders
  | IWSActionSendOrder;


export const wsActionConnectionStart = (wsUrl: string): IWSActionConnectionStart => {
  return { type: WS_CONNECTION_START, wsUrl };
};

export const wsActionConnectionSuccess = (): IWSActionConnectionSuccess => {
  return { type: WS_CONNECTION_SUCCESS };
};

export const wsActionConnectionError = (error: Event): IWSActionConnectionError => {
  return { type: WS_CONNECTION_ERROR, payload: error };
};

export const wsActionConnectionClosed = (): IWSActionConnectionClosed => {
  return { type: WS_CONNECTION_CLOSED };
};

export const wsActionGetOrders = (response: IResponseOrders): IWSActionGetOrders => {
  return { type: WS_GET_ORDERS, payload: response };
};

export const wsActionSendOrder = (order: IOrder): IWSActionSendOrder => {
  return { type: WS_SEND_ORDER, payload: order };
};
