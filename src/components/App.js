import React from 'react';
import {Route, Router, Routes} from "react-router-dom";
import Layout from "./Layout";
import ChatsPage from "../pages/ChatsPage";
import ProfilePage from "../pages/ProfilePage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<ChatsPage/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
