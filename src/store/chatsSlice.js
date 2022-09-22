import {createSlice} from "@reduxjs/toolkit";

const chatsSlice = createSlice({
    name: 'chatList',
    initialState: {
        chatList: [
            {id: 1, name: '1st chat'},
            {id: 2, name: '2nd chat'},
            {id: 3, name: '3d chat'}
        ]
    },
    reducers: {
        addChat: (state, action) => {
            state.chatList.push({id: getLastId(state.chatList) + 1, name: action.payload})
        },
        removeChat: (state, action) => {
            state.chatList = state.chatList.filter((item) => item.id !== action.payload)
        }
    }
})

const getLastId = (list) => {
    if (list.length) {
        return list[list.length - 1]?.id
    }
    return 0;
}

export default chatsSlice.reducer;
export const {addChat, removeChat} = chatsSlice.actions;
