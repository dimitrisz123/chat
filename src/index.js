import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer1 } from "./reducers.js";

const rootReducers = combineReducers({
	reducer1
});

const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
