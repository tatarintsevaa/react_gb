import React, {useEffect} from 'react';
import Header from "./Header";
import {Outlet, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";

const Layout = () => {
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user])

    return (
        <Box display={"flex"} flexDirection={"column"}>
            {user && <Header/>}
            <Outlet/>
        </Box>
    );
};

export default Layout;
