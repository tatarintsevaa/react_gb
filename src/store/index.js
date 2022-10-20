import {configureStore, combineReducers} from "@reduxjs/toolkit";
import chatsSlice from "./chatsSlice";
import messageListSlice from "./messageListSlice";
import {botAnswer} from "../asyncActions/botAnswer";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import dataSlice from "./dataSlice";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
    chatList: chatsSlice,
    messageList: messageListSlice,
    data: dataSlice,
    auth: authSlice
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }).concat([botAnswer])
})


