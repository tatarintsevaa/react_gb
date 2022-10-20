import React, {useEffect} from 'react';
import Header from "./Header";
import {Outlet, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {Backdrop, CircularProgress} from "@mui/material";

const Layout = () => {
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate();
    const {loading} = useSelector(state => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user])

    return (
        <Box display={"flex"} flexDirection={"column"}>
            {user && <Header/>}
            <Outlet/>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
};

export default Layout;
