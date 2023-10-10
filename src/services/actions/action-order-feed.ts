import { IOrderFeed, IStatusOrdersFeed } from "../types/services-types";

export const REJECT_FEED_ORDER = "REJECT_FEED_ORDER";
export const SELECT_FEED_ORDER = "SELECT_FEED_ORDER";
export const STATUS_ORDERS = "STATUS_ORDERS";
export const CHECK_ORDERS = "CHECK_ORDERS";


export interface IActionRejectFeedOrder {
  readonly type: typeof REJECT_FEED_ORDER;
}

export interface IActionSelectFeedOrder {
  readonly type: typeof SELECT_FEED_ORDER;
  readonly payload: IOrderFeed;
}

export interface IActionStatusOrders {
  readonly type: typeof STATUS_ORDERS;
  readonly payload: IStatusOrdersFeed;
}

export interface IActionCheckOrders {
  readonly type: typeof CHECK_ORDERS;
  readonly payload: IOrderFeed[];
}

export type TActionsFeed =
  | IActionRejectFeedOrder
  | IActionSelectFeedOrder
  | IActionStatusOrders
  | IActionCheckOrders;


export const actionRejectFeedOrder = (): IActionRejectFeedOrder => {
  return { type: REJECT_FEED_ORDER };
};

export const actionSelectFeedOrder = (order: IOrderFeed): IActionSelectFeedOrder => {
  return { type: SELECT_FEED_ORDER, payload: order };
};

export const actionStatusOrders = (orders: IStatusOrdersFeed): IActionStatusOrders => {
  return { type: STATUS_ORDERS, payload: orders };
};

export const actionCheckOrders = (orders: IOrderFeed[]): IActionCheckOrders => {
  return { type: CHECK_ORDERS, payload: orders };
};
