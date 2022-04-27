import * as C from './styles';

type InputType = "email" | "password" | "text";

type InputTypeProps = {
    type: InputType;
    value?: string;
    onChange?: (e: any) => void;
}

export const Input = (props: InputTypeProps) => {
    return(
        <C.Input {...props}/>
    );
}