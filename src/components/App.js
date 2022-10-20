import React, {useEffect} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Layout from "./Layout";
import ChatsPage from "../pages/ChatsPage";
import ProfilePage from "../pages/ProfilePage";
import ChatBox from "./ChatBox";
import UsersPage from "../pages/UsersPage";
import {useDispatch, useSelector} from "react-redux";
import {loadData} from "../asyncActions/loadData";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import AuthPage from "../pages/AuthPage";

const App = () => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.data)
    const {user} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(loadData());
    }, [])

    if (error) {
        return (
            <ErrorPage />
        )
    }

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={!user ? <Navigate to={'/login'} /> : <ProfilePage/>}/>
                <Route path={'/chat'} element={<ChatsPage/>}>
                    <Route path={':chatId'} element={<ChatBox />} />
                </Route>
                <Route path={'/users'} element={<UsersPage />} />
                <Route path={'/login'} element={<LoginPage />}/>
                <Route path={'/auth'} element={<AuthPage />}/>
            </Route>
        </Routes>
    );
};

export default App;
