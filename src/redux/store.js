import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const midleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...midleware));

export default store;
