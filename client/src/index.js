import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {thunk} from 'redux-thunk';

import App from './components/App';
import reducers from "./reducers";

import reportWebVitals from './reportWebVitals';

const store = createStore(reducers,{}, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY);
console.log('environment is', process.env.NODE_ENV);