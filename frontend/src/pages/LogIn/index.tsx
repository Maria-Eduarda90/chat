import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import * as C from './styles';

import { useAuth } from '../../hooks/useAuth';

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { userSignIn } = useAuth();

    const handleToSignIn = async (e: FormEvent) => {
        e.preventDefault();
        
        try{
            const data = {
                email,
                password
            }
            const response = await userSignIn(data);

            if (response.id) {
                navigate('/chat');
                return;
            }
            
        }catch(err){
            alert("senha ou email invalido");
        }

    }

    return(
        <C.Container>
            <Modal>
                <C.Form onSubmit={handleToSignIn}>
                    <label>Email: </label>
                    <Input type="email" onChange={e => setEmail(e.target.value)} value={email}/>

                    <label>Senha: </label>
                    <Input type="password" onChange={e => setPassword(e.target.value)} value={password}/>

                    <Button>
                        Entrar
                    </Button>
                </C.Form>
                <span>Não possui uma conta?<Link to="/SignUp" className="link">Clique aqui</Link></span>
            </Modal>
        </C.Container>
    );
}