import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../actions/action-web-socket";
import { initialState, reducerWebSocket } from "./reducer-web-socket";
import { testOrder, testOrderStat } from "../../utils/utils-test";



describe("reducerWebSocket", () => {

  it("initialState", () => {
    expect(reducerWebSocket(undefined, {} as any)).toEqual(initialState);
  });

  it("WS_CONNECTION_START", () => {
    const action = { type: WS_CONNECTION_START, wsUrl: "string" };

    expect(reducerWebSocket(undefined, action)).toEqual({
      ...initialState,
      loading: true,
    })
  });

  it("WS_CONNECTION_SUCCESS", () => {
    const action = { type: WS_CONNECTION_SUCCESS };

    expect(reducerWebSocket(undefined, action)).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: true,
    })
  });

  it("WS_CONNECTION_ERROR", () => {
    const action = { type: WS_CONNECTION_ERROR, payload: "error" as any };

    expect(reducerWebSocket(undefined, action)).toEqual({
      ...initialState,
      error: "error",
      wsConnected: false,
      loading: false,
    });
  });

  it("WS_CONNECTION_CLOSED", () => {
    const action = { type: WS_CONNECTION_CLOSED };

    expect(reducerWebSocket(undefined, action)).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
      loading: false,
    })
  });

  it("WS_GET_ORDERS", () => {
    const action = { type: WS_GET_ORDERS, payload: testOrderStat };

    expect(reducerWebSocket(undefined, action)).toEqual({
      ...initialState,
      error: undefined,
      orders: [testOrder],
      total: testOrderStat.total,
      totalToday: testOrderStat.totalToday,
      loading: false,
    })
  });

});
