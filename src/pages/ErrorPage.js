import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import {Alert, AlertTitle, Box} from "@mui/material";
import {loadData} from "../asyncActions/loadData";

const ErrorPage = () => {
    const dispatch = useDispatch();
    const {errorMessage} = useSelector(state => state.data)
    const handleClick = () => {
        dispatch(loadData())
    }
    return (
        <Box>
            <Alert sx={{mb: 1}} severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
            </Alert>
            <Button sx={{alignSelf: "center"}} variant="outlined" onClick={handleClick}>Try Again</Button>
        </Box>
    );
};

export default ErrorPage;
