import {addUsers, setError, setErrorMessage} from "../store/dataSlice";

export const loadData = () => {
    return async dispatch => {
       try {
           const response = await fetch('https://jsonplaceholder.typicode.com/users');
           const users = await response.json();
           dispatch(addUsers(users))
           dispatch(setError(false))
       } catch (error) {
           dispatch(setError(true));
           dispatch(setErrorMessage(error.message));
       }
    }
}
