import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        error: false,
        users: []
    },
    reducers: {
        addUsers(state, action) {
            state.users = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})

export default dataSlice.reducer;
export const {addUsers, setError} = dataSlice.actions;
