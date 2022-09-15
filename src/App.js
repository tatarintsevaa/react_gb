import './App.css';
import Message from "./components/Message";
import {useEffect, useRef, useState} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {IconButton, InputBase, Paper, Box, List, ListSubheader, ThemeProvider} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ChatItem from "./components/ChatItem";
import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0DA1A6"
        },
        secondary: {
            main: '#abc95a'
        },
    },
});

function App() {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([
        {id: 1, name: '1st chat'},
        {id: 2, name: '2nd chat'},
        {id: 3, name: '3d chat'}
    ]);
    const [inputValue, setInputValue] = useState('');
    let inputRef = useRef(null);

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];
        lastMessage?.author === 'user' && setTimeout(() => {
            addMessage('bot', 'message delivered')
        }, 1000)
    }, [messageList])

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleClickSendButton = () => {
        inputValue !== '' && addMessage('user', inputValue);
        setInputValue('');
        inputRef.focus();
    }

    const addMessage = (author, text) => {
        setMessageList([...messageList, {id: getLastId(messageList) + 1, text: text, author: author}])
    }

    const getLastId = (list) => {
        if (list.length) {
            return list[list.length - 1]?.id
        }
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Box className={'wrapper'}>
                    <List
                        sx={{minWidth: '250px'}}
                        subheader={
                            <ListSubheader component="div" id="list-subheader" sx={{textAlign: 'start'}}>
                                Chat list
                            </ListSubheader>
                        }
                    >
                        {chatList.map((chat) => <ChatItem chat={chat} key={chat.id}/>)}
                    </List>
                    <Box sx={{flex: 1}}>
                        <Box className="message-wrapper">
                            {messageList.map((message) => <Message message={message} key={message.id}/>)}
                        </Box>
                        <Paper sx={{width: '100%', height: '40px', display: 'flex', justifyContent: 'space-around'}}>
                            <InputBase
                                sx={{width: '90%', ml: 1, mr: 1, flex: 1, minWidth: '100px'}}
                                placeholder="Inter your message text"
                                inputProps={{'aria-label': 'search google maps'}}
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
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default App;
