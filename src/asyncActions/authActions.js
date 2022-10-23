import {authError, authLoading, authSuccess, loginSuccess, logout} from "../store/authSlice";
import {auth} from "../service/firebase";


export const registerInitiate = (email, password, displayName) => {
    return dispatch => {
        dispatch(authLoading(true));
        auth.createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                await user.updateProfile({displayName})
                dispatch(authSuccess(user));
                dispatch(authLoading(false));
            })
            .catch((error) => {
                dispatch(authError(error.message))
                dispatch(authLoading(false));
            })
            .finally(() => {
                dispatch(authLoading(false));
            })
    }
}

export const loginInitiate = (email, password) => {
    return dispatch => {
        dispatch(authLoading(true));
        auth.signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user));
                dispatch(authLoading(false))
            })
            .catch((error) => {
                dispatch(authError(error.message))
                dispatch(authLoading(false));
            })
            .finally(() => {
                dispatch(authLoading(false));
            })
    }
}

export const logoutInitiate = () => {
    return dispatch => {
        dispatch(authLoading(true));
        auth.signOut()
            .then(() => {
                dispatch(logout());
                dispatch(authLoading(false))
            })
            .catch((error) => {
                dispatch(authError(error.message))
                dispatch(authLoading(false));
            })
            .finally(() => {
                dispatch(authLoading(false));
            })
    }
}

