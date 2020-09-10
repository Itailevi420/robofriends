import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './redux/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({ searchRobots, requestRobots });
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

