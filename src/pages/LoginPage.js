import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Box, Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {authLoading} from "../store/authSlice";
import {loginInitiate} from "../asyncActions/authActions";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(loginInitiate(email, password))
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user])

    return (
        <Box className={'login-wrapper'}>
            <Paper
                sx={{padding: 2, display: 'flex', flexDirection: 'column'}}
            >
                <TextField
                    sx={{mb:2}}
                    required
                    type={'email'}
                    id="outlined-email"
                    label="Email"
                    placeholder={'Inter your email address'}
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <TextField
                    sx={{mb:2}}
                    required
                    type={'password'}
                    id="outlined-password"
                    label="Password"
                    placeholder={'Inter your email password'}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Button
                    sx={{mb:2}}
                    variant="contained"
                    onClick={handleSubmit}>Sign in</Button>

                <Link to={'/auth'}>Sign up</Link>
            </Paper>
        </Box>
    );
};

export default LoginPage;
