import * as C from './styles';
import { SendMessage } from "../../components/SendMessage";
import { Sidebar } from '../../components/Sidebar';

export const Chat = () => {
    return(
        <C.Container>
            <Sidebar />
            <SendMessage />
        </C.Container>
    );
}