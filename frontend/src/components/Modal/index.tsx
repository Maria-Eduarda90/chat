import { ReactNode } from 'react';
import * as C from './styles'; 

type ModalProps = {
    children: ReactNode;
}

export const Modal = (porps: ModalProps) => {
    return(
        <C.Modal {...porps} />
    );
}