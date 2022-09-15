import React from 'react';
// import PropTypes from 'prop-types';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const ChatItem = ({chat}) => {
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ChatIcon/>
                    </ListItemIcon>
                    <ListItemText primary={chat.name}/>
                </ListItemButton>
            </ListItem>
        </>
    );
};

// ChatItem.propTypes = {};

export default ChatItem;
