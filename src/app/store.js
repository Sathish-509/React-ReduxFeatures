import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware'

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const myLogger = (store) => (next) => (action) => {
	console.log("Logged Action: ", action);
	next(action);
}

const store = createStore(combineReducers({math, user}),
	{}, 
	applyMiddleware(myLogger, logger, thunk, promise)
);

export default store;