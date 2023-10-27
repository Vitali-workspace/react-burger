import { TActionsFeed } from "../actions/action-order-feed";
import { IOrderFeed } from "../types/services-types";

export const REJECT_FEED_ORDER = "REJECT_FEED_ORDER";
export const SELECT_FEED_ORDER = "SELECT_FEED_ORDER";
export const STATUS_ORDERS = "STATUS_ORDERS";
export const CHECK_ORDERS = "CHECK_ORDERS";


interface IStateOrderFeed {
  orders: IOrderFeed[],
  selectedOrder: IOrderFeed | null;
  ready: number[],
  pending: number[],
}

export const initialState: IStateOrderFeed = {
  orders: [],
  selectedOrder: null,
  ready: [],
  pending: [],
};


export const reducerOrderFeed = (state = initialState, action: TActionsFeed): IStateOrderFeed => {

  switch (action.type) {

    case SELECT_FEED_ORDER: {
      return { ...state, selectedOrder: action.payload };
    }
    case STATUS_ORDERS: {
      return {
        ...state,
        ready: action.payload.ready,
        pending: action.payload.pending,
      }
    }
    case CHECK_ORDERS: {
      return { ...state, orders: action.payload };
    }
    case REJECT_FEED_ORDER: {
      return { ...state, selectedOrder: null }
    }
    default: { return state }
  }
}
