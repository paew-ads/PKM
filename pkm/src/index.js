import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { sessionService, sessionReducer } from "redux-react-session";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const reducers = {
  // ... your other reducers here ...
  session: sessionReducer,
};
const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  undefined,
  compose(applyMiddleware(thunkMiddleware))
);

sessionService.initSessionService(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
