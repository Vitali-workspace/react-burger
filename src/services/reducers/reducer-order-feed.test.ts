import {
  REJECT_FEED_ORDER,
  SELECT_FEED_ORDER,
  STATUS_ORDERS,
  CHECK_ORDERS,
  initialState,
  reducerOrderFeed
} from "./reducer-order-feed";
import {
  IActionCheckOrders,
  IActionStatusOrders,
  IActionSelectFeedOrder,
  IActionRejectFeedOrder
} from "../actions/action-order-feed";
import { testOrderFeed } from "../../utils/utils-test";


describe("reducerOrderFeed", () => {

  it("initialState", () => {
    expect(reducerOrderFeed(undefined, {} as any)).toEqual(initialState);
  });

  it("CHECK_ORDERS", () => {
    const action: IActionCheckOrders = { type: CHECK_ORDERS, payload: [testOrderFeed] };

    expect(reducerOrderFeed(undefined, action)).toEqual({
      ...initialState,
      orders: [testOrderFeed],
    });
  });

  it("STATUS_ORDERS", () => {
    const action: IActionStatusOrders = {
      type: STATUS_ORDERS,
      payload: { ready: [1, 2], pending: [3, 4] },
    };

    expect(reducerOrderFeed(undefined, action)).toEqual({
      ...initialState,
      ready: [1, 2],
      pending: [3, 4],
    });
  });

  it("SELECT_FEED_ORDER", () => {
    const action: IActionSelectFeedOrder = { type: SELECT_FEED_ORDER, payload: testOrderFeed };

    expect(reducerOrderFeed(undefined, action)).toEqual({
      ...initialState,
      selectedOrder: testOrderFeed,
    });
  });

  it("REJECT_FEED_ORDER", () => {
    const action: IActionRejectFeedOrder = { type: REJECT_FEED_ORDER };

    expect(reducerOrderFeed(undefined, action)).toEqual({
      ...initialState,
      selectedOrder: null,
    });
  });
});

