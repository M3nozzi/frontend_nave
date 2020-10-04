import React from 'react';
import logoImg from '../../assets/logoNave.png';

import { Form } from './styles';

const Login = () => {
    return (
        <>
            <Form>
                <div>
                    <img src={logoImg} alt='Nave Logo' />
                    <label for="email">E-mail</label>
                    <input
                        type ='text'                     
                        placeholder='E-mail'
                    />
                    <label for="password">Senha</label>
                     <input
                        type ='text'                     
                        placeholder='Senha'
                    />
                    <button type='submit'>Enviar</button>
                </div>
            </Form>
        </>
    )
};

export default Login;
