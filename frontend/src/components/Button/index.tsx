import { ReactNode } from 'react';
import * as C from './styles';

type TypeButton = {
    children: ReactNode;
    onClick?: () => void;
}

export const Button = (props: TypeButton) => {
    return(
        <C.Button {...props} />
    );
}