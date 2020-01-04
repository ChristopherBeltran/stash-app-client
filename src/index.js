import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store.js'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './app_components/Loading.js'

const { persistor, store } = configureStore()


ReactDOM.render(<Provider store={ store }><PersistGate 
    loading={<Loading />}
    persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
