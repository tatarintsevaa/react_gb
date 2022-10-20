import React, {useEffect, useState} from 'react';
import {Box, Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerInitiate} from "../asyncActions/authActions";

const AuthPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (password === passwordConfirm) {
            dispatch(registerInitiate(email, password, displayName));
        }
    }

    const clearFields = () => {
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
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
                    id="outlined-name"
                    label="Username"
                    placeholder={'Inter your email username'}
                    value={displayName}
                    onChange={(event) => {
                        setDisplayName(event.target.value);
                    }}
                />
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
                <TextField
                    sx={{mb:2}}
                    required
                    type={'password'}
                    id="outlined-passwordConfirm"
                    label="Password"
                    placeholder={'Inter your email password'}
                    value={passwordConfirm}
                    onChange={(event) => {
                        setPasswordConfirm(event.target.value);
                    }}
                />
                <Button sx={{mb:2}} variant="contained" onClick={handleSubmit}>Sign up</Button>

                <Link to={'/login'}>Sign in</Link>
            </Paper>
        </Box>
    );
};

export default AuthPage;
