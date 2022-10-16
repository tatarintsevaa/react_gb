import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <App/>
            </Provider>
        </PersistGate>
    </BrowserRouter>
);

reportWebVitals();
