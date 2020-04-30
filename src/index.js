import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


import combineReducers from "./store/reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers, composeWithDevTools(), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
