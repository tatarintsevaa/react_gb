import React from 'react';
import {Link} from "react-router-dom";
import {Box, Paper} from "@mui/material";

const LoginPage = () => {
    return (
        <Box className={'login-wrapper'}>
            <Paper sx={{padding: 2}}>
                login
                <Link to={'/auth'}> asdasd </Link>
            </Paper>
        </Box>
    );
};

export default LoginPage;
