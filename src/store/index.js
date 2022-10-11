import {configureStore, combineReducers} from "@reduxjs/toolkit";
import chatsSlice from "./chatsSlice";
import messageListSlice from "./messageListSlice";
import {botAnswer} from "../asyncActions/botAnswer";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";

const rootReducer = combineReducers({
    chatList: chatsSlice,
    messageList: messageListSlice
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([botAnswer, logger])
})
