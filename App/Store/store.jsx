import { createStore, applyMiddleware, compose } from "redux";
import PromiseMiddleware from "redux-promise";
import rootReducer from "./Reducers";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(PromiseMiddleware))
);
export default store;
