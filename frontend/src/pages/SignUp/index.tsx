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

        if(name === '' || name === null){
            alert('preencha o campo name');
            return;
        } else if (email === '' || email === null) {
            alert('preencha o campo email');
            return;
        } else if (password === '' || password === null){
            alert('preencha o campo senha');
            return;
        } else if (confirmPassword === '' || confirmPassword === null){
            alert('preencha o campo confirmar senha');
            return;
        }

        if (password !== confirmPassword) {
            return alert('Senhas não correspondem');
        }

        if (password.length < 5){
            return alert('a senha precisa conter pelo menos 5 caracteres');
        }
  
        try {
            const data = {
                name: name,
                email: email,
                password: password,
            }

            const response = await userSignUp(data);

            if(response){
                navigate('/chat');
            }

        } catch(err){
            alert('Já existe um usuário cadastrado com esse email');
        }
    }

    return(
        <C.Container>
            <Modal>
                <C.Form onSubmit={handleToSignUp}>
                    <label>Nome:</label>
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