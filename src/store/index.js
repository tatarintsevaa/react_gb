import {configureStore, combineReducers} from "@reduxjs/toolkit";
import chatsSlice from "./chatsSlice";
import messageListSlice from "./messageListSlice";

const rootReducer = combineReducers({
    chatList: chatsSlice,
    messageList: messageListSlice
})

export const store = configureStore({
    reducer: rootReducer
})
