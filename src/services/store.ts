import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { wsActions, middlewareWebSocket } from "./middleware/middleware-web-socket";

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, middlewareWebSocket(wsActions)));

export const store = createStore(rootReducer, enhancer);
