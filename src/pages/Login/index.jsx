import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login } from '../../services/auth';

import logoImg from '../../assets/logoNave.png';

import api from '../../services/api';

import { Form } from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    async function handleSignin(e) {

        e.preventDefault();
       
        try {
            const response = await api.post('/users/login', { email, password });
            login(response.data.token);
    
            history.push('/home');
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Form onSubmit={handleSignin}>
                <div>
                    <img src={logoImg} alt='Nave Logo' />
                    <label>E-mail</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='E-mail'
                    />
                    <label>Senha</label>
                     <input
                        type='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Senha'
                    />
                    <button type='submit'>Entrar</button>
                </div>
            </Form>
        </>
    )
};

export default Login;
