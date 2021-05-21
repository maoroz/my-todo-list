import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from 'react-redux';
import store from './app/store';
import { fetchTodos } from './features/todoSlice';

store.dispatch(fetchTodos);

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    rootElement
);
