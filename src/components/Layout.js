import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";

const Layout = () => {
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Header/>
            <Outlet/>
        </Box>
    );
};

export default Layout;
