import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers,createStore,compose,applyMiddleware  } from 'redux';
import { sessionService,sessionReducer  } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';





const reducers = {
  // ... your other reducers here ...
  session: sessionReducer
};
const reducer = combineReducers(reducers);

const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));
 
sessionService.initSessionService(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
