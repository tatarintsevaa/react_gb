import React from 'react';
import styled from "@emotion/styled";
import {useTheme} from "@mui/material";
import PropTypes from "prop-types";

const Message = ({message}) => {
    const theme = useTheme();
    const Message = styled.div`
      padding: 10px;
      background-color: ${() => message.author === 'bot' ? theme.palette.secondary.main : theme.palette.primary.main} ;
      font-size: 24px;
      color: #FFF;
      border-radius: 10px;
      align-self:  ${() => message.author === 'bot' ? 'end' : 'start'};
      margin: 5px 10px;
      max-width: 70%;
      word-break: break-all;
    `
    return (
        <Message>{message.text}</Message>
    );
};

Message.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        author: PropTypes.string,
    })
}

export default Message;
