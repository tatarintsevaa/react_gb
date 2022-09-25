import {createSlice} from "@reduxjs/toolkit";

const messageListSlice = createSlice({
    name: 'messageList',
    initialState: {
        messageList: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messageList.push({id: getLastId(state.messageList) + 1, ...action.payload})
        },
        clearChatMessages: (state, action) => {
            state.messageList = state.messageList.filter((item) => +item.chatId !== +action.payload)
        }
    }
})

const getLastId = (list) => {
    if (list.length) {
        return list[list.length - 1]?.id
    }
    return 0;
}

export default messageListSlice.reducer;
export const {addMessage, clearChatMessages} = messageListSlice.actions;
