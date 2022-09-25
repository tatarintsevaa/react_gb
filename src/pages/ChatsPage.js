import '../App.css';
import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, List, ListSubheader, ThemeProvider,} from "@mui/material";
import MenuChatItem from "../components/MenuChatItem";
import {createTheme} from "@mui/material";
import {useSelector} from "react-redux";
import ModalChatForm from "../components/ModalChatForm";
import {Outlet} from "react-router-dom";
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

function ChatsPage() {
    const {chatList} = useSelector(state => state.chatList)

    return (
        <ThemeProvider theme={theme}>
            <div className="chats">
                <Box className={'wrapper'}>
                    <List
                        sx={{minWidth: '250px'}}
                        subheader={
                            <ListSubheader component="div" id="list-subheader" sx={{textAlign: 'start'}}>
                                Chat list
                            </ListSubheader>
                        }
                    >
                        {chatList.map((chat) => <MenuChatItem chat={chat} key={chat.id}/>)}
                        <ModalChatForm/>
                    </List>
                    <Outlet/>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default ChatsPage;

