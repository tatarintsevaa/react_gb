import React from 'react';
import styled from "@emotion/styled";


const Message = ({message}) => {
    const Message = styled.div`
      padding: 10px;
      background-color: ${() => message.author === 'bot' ? '#abc95a' : '#0DA1A6'} ;
      font-size: 24px;
      color: #FFF;
      border-radius: 10px;
      align-self:  ${() => message.author === 'bot' ? 'end' : 'start'};
      margin-bottom: 5px;
      margin-top: 5px;
      max-width: 70%;
      word-break: break-all;
    `
    return (
        <Message className={message.author}>{message.text}</Message>
    );
};

export default Message;
