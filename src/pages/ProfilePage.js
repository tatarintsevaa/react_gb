import React, {useEffect} from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useDispatch, useSelector} from "react-redux";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {useNavigate} from "react-router-dom";
import {logoutInitiate} from "../asyncActions/authActions";

const ProfilePage = () => {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user])

    return (
        <Box>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={user?.displayName} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AlternateEmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={user?.email} />
                </ListItem>
                <ListItemButton onClick={() => dispatch(logoutInitiate())}>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </List>
        </Box>
    );
};

export default ProfilePage;
