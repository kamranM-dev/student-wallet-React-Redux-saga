import { routerReducer, routerMiddleware } from "react-router-redux";
import ReactDOM from "react-dom";
import React from "react";
import AppRender from "./app-render";
import "whatwg-fetch";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import "./assets/styles/reset.css";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/styles/modal.scss";
import "./assets/styles/typography.scss";
import "./assets/styles/utils.scss";
import "./assets/styles/datepicker.scss";
import "./index.scss";
import reducers from "./reducers/index";
// import { logger } from 'redux-logger';
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/index";
import { saveState, loadState } from "./localStorage";
/*

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}
*/

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const reducer = combineReducers({ ...reducers, router: routerReducer });

const middleware = applyMiddleware(
  // logger,
  sagaMiddleware,
  routerMiddleware(history)
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const presistentState = loadState();
const store = createStore(
  reducer,
  presistentState,
  composeEnhancers(middleware)
);

sagaMiddleware.run(rootSaga);

// conditionallyRender(store, history);

store.subscribe(() => {
  saveState({ user: store.getState().user });
});

ReactDOM.render(
  <AppRender store={store} history={history} />,
  document.getElementById("root")
);
