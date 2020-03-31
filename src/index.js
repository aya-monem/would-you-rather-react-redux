import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App';
import reducer from './reducers'
import logger from './middlewares/logger'

const store = createStore(reducer, applyMiddleware(thunk,logger))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
    
 ,document.getElementById('root')
);

