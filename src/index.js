import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from './store/configureStore'
import {startGetItems} from './action/ItemsAction'

const store = configureStore()

store.subscribe(()=>{ 
    console.log(store.getState())
})
console.log(store.getState())

store.dispatch(startGetItems())

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

