import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import ChatsPage from "../pages/ChatsPage";
import ProfilePage from "../pages/ProfilePage";
import ChatBox from "./ChatBox";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<ProfilePage/>}/>
                <Route path={'/chat'} element={<ChatsPage/>}>
                    <Route path={':chatId'} element={<ChatBox />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
