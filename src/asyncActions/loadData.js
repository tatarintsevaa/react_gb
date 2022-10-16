import {addUsers, setError} from "../store/dataSlice";

export const loadData = () => {
    return async dispatch => {
       try {
           const response = await fetch('https://jsonplaceholder.typicode.com/users');
           const users = await response.json();
           dispatch(addUsers(users))
           dispatch(setError(false))
       } catch (error) {
           console.log(error);
           dispatch(setError(true))
       }
    }
}
