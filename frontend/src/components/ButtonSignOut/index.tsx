import { VscSignOut } from 'react-icons/vsc';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';

export const ButtonSignOut = () => {
    const { userSignOut } = useAuth();
    
    return(
        <C.ButtonSignOut onClick={userSignOut}>
            <VscSignOut size="32" />
        </C.ButtonSignOut>
    );
}