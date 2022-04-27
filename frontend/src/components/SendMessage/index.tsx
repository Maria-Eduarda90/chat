import { FormEvent, useState } from 'react';
import { sendMessage } from '../../services/resources/message';
import ImgEnviar from '../../assets/enviar.png';
import { Message } from '../Message';
import * as C from './styles';

export const SendMessage = () => {
    const [ message, setMessage ] = useState('');

    const handleSendMessage = async (event: FormEvent) => {
        event.preventDefault();

        if(!message.trim()){
            return;
        }

        const data = {
            message: message,
        }

        await sendMessage(data);
        setMessage('');
    }

    return(
        <C.Container>
            <div className="historico_menssagens">
                <Message />
            </div>
            <C.Form onSubmit={handleSendMessage}>
                <C.TextArea
                 name="message" 
                 id="message" 
                 placeholder="Digite..." 
                 value={message} 
                 onChange={e => setMessage(e.target.value)}
                />

                <button>
                    <img src={ImgEnviar} alt="enviar mensagem" />
                </button>
            </C.Form>
        </C.Container>
    );
}