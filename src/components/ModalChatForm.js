import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {ButtonGroup, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import {addChat} from "../store/chatsSlice";
import {useDispatch} from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

export default function ModalChatForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleOkButtonClick = () => {
        if (inputValue.length) {
            dispatch(addChat(inputValue));
            handleClose();
            setInputValue('')
        }
    }

    return (
        <div>
            <ListItem disablePadding>
                <ListItemButton onClick={handleOpen}>
                    <ListItemIcon>
                        <AddIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Add chat'}/>
                </ListItemButton>
            </ListItem>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        label="Chat name"
                        variant="outlined"
                        sx={{width: '90%', ml: 1, mr: 1, flex: 1, minWidth: '100px', mb: 1}}
                        placeholder="Inter chat name"
                        onChange={handleChange}
                        onKeyDown={(evt) => {
                            evt.key === 'Enter' && handleOkButtonClick()
                        }}
                        value={inputValue}
                    />
                    <ButtonGroup sx={{ }} variant="text" aria-label="text button group">
                        <Button onClick={handleOkButtonClick}>OK</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </div>
    );
}
