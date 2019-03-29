import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';



const store = createStore(allReducers, devToolsEnhancer());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
