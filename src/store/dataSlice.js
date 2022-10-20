import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        error: false,
        errorMessage: '',
        users: []
    },
    reducers: {
        addUsers(state, action) {
            state.users = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        }
    }
})

export default dataSlice.reducer;
export const {addUsers, setError, setErrorMessage} = dataSlice.actions;
