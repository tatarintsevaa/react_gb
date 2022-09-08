import './App.css';
import Message from "./components/Message";
import {useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";

const Input = styled.input`
      padding: 10px;
      border-radius: 10px 0 0 10px;
      border-color: #469fc9;
      border-style: solid;
      &:focus-visible {
        outline: none;
      }
      font-size: 24px;
    `

const Button = styled.button`
  padding: 10px;
  border-radius: 0 10px 10px 0;
  border-color: #469fc9;
  border-style: solid;
  border-left: none;
  color: #fff;
  background-color: #469fc9;
  font-size: 24px;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #3f8fb6;
    cursor: pointer;
  }
`

const Form = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
`

function App() {
    const [messageList, setMessageList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    let inputRef = useRef(null);

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];
        lastMessage?.author === 'user' && setTimeout(() => {
            setMessageList([...messageList, {author: 'bot', text: 'message delivered'}]);
        }, 1000)
    }, [messageList])

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const addMessage = () => {
        inputValue !== '' && setMessageList([...messageList, {text: inputValue, author: 'user'}]);
        setInputValue('');
        inputRef.focus();
    }

    return (
        <div className="App">
            <div className="container">
                <div className="wrapper">
                    {messageList.map((message, index) => <Message message={message} key={index}/>)}
                </div>
                <Form>
                    <Input ref={ref => inputRef = ref}
                           value={inputValue}
                           onChange={handleChange}
                           onKeyDown={(evt) => {evt.key === 'Enter' && addMessage()}}/>
                    <Button onClick={addMessage} >Send</Button>
                </Form>
            </div>
        </div>
    );
}

export default App;
