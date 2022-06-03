import { getMessage } from '../../services/resources/message';
import io from 'socket.io-client';

import { useEffect, useState } from 'react';
import * as C from './style';

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
    }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:3333');

socket.on('new_message', (newMessage: Message) => {
    messagesQueue.push(newMessage)
})

export const Message = () => {
    const [message, setMessage] = useState<Message[]>([]);

    const getAllMessage = async () => {
        const { data } = await getMessage();
        setMessage(data); 
    }

    useEffect(() => {
        getAllMessage();
    }, [message])

    return (
        <C.Container>
            <ul className="messageList">
                {message.map(message => {
                    return(
                        <li key={message.id} className="message">
                            <p>{message.user.name}</p>
                            <div className="messageUser">
                                <span>{message.text}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </C.Container>
    );
}