import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import ChatsPage from "../pages/ChatsPage";
import ProfilePage from "../pages/ProfilePage";
import ChatBox from "./ChatBox";
import UsersPage from "../pages/UsersPage";
import {useDispatch, useSelector} from "react-redux";
import {loadData} from "../asyncActions/loadData";
import ErrorPage from "../pages/ErrorPage";

const App = () => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.data)
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
                <Route index element={<ProfilePage/>}/>
                <Route path={'/chat'} element={<ChatsPage/>}>
                    <Route path={':chatId'} element={<ChatBox />} />
                </Route>
                <Route path={'/users'} element={<UsersPage />} />
            </Route>
        </Routes>
    );
};

export default App;
