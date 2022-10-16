import React, {useEffect, useRef, useState} from 'react';
import {Box, IconButton, InputBase, Paper} from "@mui/material";
import Message from "./Message";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addMessage} from "../store/messageListSlice";
import {botAnswer} from "../asyncActions/botAnswer";

const ChatBox = () => {
    const {chatId} = useParams();
    const {messageList} = useSelector(state => state.messageList);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    let inputRef = useRef(null);

    // useEffect(() => {
    //     const lastMessage = messageList[messageList.length - 1];
    //     lastMessage?.author === 'User' && setTimeout(() => {
    //         dispatch(addMessage({chatId: chatId, author: 'bot', text: 'Message delivered'}))
    //     }, 1000)
    // }, [messageList])

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleClickSendButton = () => {
        inputValue !== '' && dispatch(addMessage({chatId: chatId, text: inputValue, author: 'User'}));
        setInputValue('');
        inputRef.focus();
        // dispatch(botAnswer({chatId: chatId, text: 'message delivered', author: 'bot'}));
    }

    return (
        <Box sx={{flex: 1}}>
            <Box className="message-wrapper">
                {messageList.map((message) => {
                    if (+message.chatId === +chatId) {
                        return <Message message={message} key={message.id}/>
                    }
                })}
            </Box>
            <Paper sx={{width: '100%', height: '40px', display: 'flex', justifyContent: 'space-around'}}>
                <InputBase
                    sx={{width: '90%', ml: 1, mr: 1, flex: 1, minWidth: '100px'}}
                    placeholder="Inter your message text"
                    ref={ref => inputRef = ref}
                    onChange={handleChange}
                    onKeyDown={(evt) => {
                        evt.key === 'Enter' && handleClickSendButton()
                    }}
                    value={inputValue}
                />
                <IconButton
                    sx={{mr: 1, width: '40px'}}
                    color="primary"
                    onClick={handleClickSendButton}
                >
                    <SendIcon/>
                </IconButton>
            </Paper>
        </Box>
    );
};

export default ChatBox;
