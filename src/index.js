//polyfills
import 'core-js/fn/object/values';
import 'core-js/fn/string/starts-with';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { fetchItems } from './actions';

//const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
//const devtoolMiddleware = ext && ext();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    //devtoolMiddleware,
  ),
);

store.dispatch(fetchItems());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
