import { Middleware, MiddlewareAPI } from "redux";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_SEND_ORDER,
  WS_GET_ORDERS,
} from "../actions/action-web-socket";
import { RootState, AppDispatch } from "../types/services-types";


interface IWSActionCollection {
  onOrders: typeof WS_GET_ORDERS,
  onSendOrders: typeof WS_SEND_ORDER,
  wsInit: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR,
}

export const wsActions = {
  onOrders: WS_GET_ORDERS,
  onSendOrders: WS_SEND_ORDER,
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
};


export const middlewareWebSocket = (wsActions: IWSActionCollection): Middleware => {

  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload, wsUrl } = action;
      const { onOpen, wsInit, onError, onClose, onOrders, onSendOrders } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);

          if (data.success) {
            dispatch({ type: onOrders, payload: data });
          } else {
            socket!.close();
          }
        };

        socket.onclose = () => {
          dispatch({ type: onClose });
        };

        if (type === onClose) {
          socket.close();
        }

        if (type === onSendOrders) {
          socket.send(JSON.stringify(payload));
        }
      }

      next(action);
    };

  }) as Middleware;
}
