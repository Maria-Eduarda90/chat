import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Modal } from '../../components/Modal';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';

export const SignUp = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const { userSignUp } = useAuth();

    const handleToSignUp = async (e: FormEvent) => {
        e.preventDefault();

        if(name === ''){
            return alert('preencha o campo name');
        } else if (email === '') {
            return alert('preencha o campo email');
        } else if (password === ''){
            return alert('preencha o campo senha');
        } else if (confirmPassword === ''){
            return alert('preencha o campo confirmar senha');
        }

        if (password !== confirmPassword) {
            return alert('Senhas não correspondem');
        }
  
        try {
            const data = {
                name: name,
                email: email,
                password: password,
            }

            const response = await userSignUp(data)
            if(response){
                navigate('/chat')
            }
        } catch(err){
            console.log("Analysis error: ", err)
        }
    }

    return(
        <C.Container>
            <Modal>
                <C.Form onSubmit={handleToSignUp}>
                    <label>Name/Apelido: </label>
                    <Input type='text' value={name} onChange={e => setName(e.target.value)}/>

                    <label>Email: </label>
                    <Input type='email' value={email} onChange={e => setEmail(e.target.value)}/>

                    <label>Senha: </label>
                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <label>Confirmar Senha: </label>
                    <Input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>

                    <Button>
                        Criar Conta
                    </Button>
                </C.Form>
            </Modal>
        </C.Container>
    );
}