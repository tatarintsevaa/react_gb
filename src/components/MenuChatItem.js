import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import {useNavigate, useParams} from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useDispatch} from "react-redux";
import {removeChat} from "../store/chatsSlice";
import {clearChatMessages} from "../store/messageListSlice";

const MenuChatItem = ({chat}) => {
    const navigate = useNavigate();
    const {chatId} = useParams();
    const dispatch = useDispatch();
    return (
        <>
            <ListItem
                key={chat.id}
                disablePadding
                secondaryAction={
                    <IconButton edge={"end"} onClick={() => {
                        dispatch(removeChat(chat.id))
                        dispatch(clearChatMessages(chat.id))
                        const id = chat.id - 1;
                        navigate('/chat/' + id)
                    }}>
                        <HighlightOffIcon/>
                    </IconButton>
                }
            >
                <ListItemButton selected={chat.id === +chatId} onClick={() => navigate('/chat/' + chat.id)}>
                    <ListItemIcon>
                        <ChatIcon/>
                    </ListItemIcon>
                    <ListItemText primary={chat.name}/>
                </ListItemButton>
            </ListItem>
        </>
    );
};

MenuChatItem.propTypes = {
    chat: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })
};

export default MenuChatItem;
