import Message from "./Chat/Message";
import InputLine from "./Chat/InputLine";
import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import { MessageContext } from "../../Contexts/MessageContext";

export default function Chat(props) {
    const InputRef = useRef();
    const [messages, setMessages] = useState([]);

    const SendMessageHandler = (e) => {
        let allMessages = {};
        let newMessage = {};

        let currentInput = InputRef.current;
        let InputValue = currentInput.value;
        newMessage.text = InputValue;

        allMessages = [...messages, newMessage];
        setMessages(allMessages);
    }

    useEffect(() => {
        setTimeout(() => {
            let currentInp = InputRef.current;
            currentInp.value = '';
        }, 50)
    })

    return (
        <div className="chat">
            <div className="messages">
                <Message time="Sat 5:15 AM" text={'Hey, I just woke up and suddenly it just dawned on me that I had forgotten to tell my parents about my schedule on the next week'}></Message>
                {messages.map((message) => (
                    <Message time="Sat 5:15 AM" text={message.text}></Message>
                ))}
            </div>
            <InputLine InputRef={InputRef} SendMessageHandler={SendMessageHandler}></InputLine>
        </div>
    )
}