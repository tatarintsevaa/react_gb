import React from 'react';
import styled from "@emotion/styled";


const Message = ({name}) => {
    const Message = styled.div`
      padding: 20px;
      background-color: #0DA1A6;
      font-size: 24px;
      color: #FFF;
      border-radius: 10px;
      transition: 0.3s ease-in;
      &:hover {
        background-color: #fff;
        border: 1px solid #0DA1A6;
        color: #0DA1A6;
        cursor: pointer;
      }
    `
    return (
        <Message> Привет, {name} !</Message>
    );
};

export default Message;
