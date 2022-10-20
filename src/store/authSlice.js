import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
    loading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLoading(state, action) {
            state.loading = action.payload;
        },
        authError(state, action) {
            state.error = action.payload
        },
        authSuccess(state, action) {
            state.user = action.payload
        }
    }
})

export default authSlice.reducer;
export const {authLoading, authError, authSuccess} = authSlice.actions;


