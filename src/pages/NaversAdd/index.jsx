import React from 'react';
import {  Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Navbar from '../../components/Navbar/Navbar';

import { FormNavers, Head, Group, Content } from './styles';

const NaversAdd = () => {
    
    return (
        <>
            <Navbar />
            <Content>
            <Head>
                    <Link to='/home'>
                        <FiChevronLeft size={32} />
                    </Link>
                    <h1>Adicionar Naver</h1> 
            </Head>
            <FormNavers onSubmit={console.log('enviado')}>
                <Group>
                    <label>Nome</label>
                    <input
                        type='text'
                        placeholder='Nome'
                    />

                    <label>Cargo</label>
                    <input
                        type='text'
                        placeholder='Cargo'
                    />
                    <label>Idade</label>
                    <input
                        type='date'
                        placeholder='Idade'
                    />
                </Group>
                <Group>
                    <label>Tempo de Empresa</label>
                    <input
                        type='text'
                        placeholder='Tempo de empresa'
                    />
                    <label>Projetos que participou</label>
                    <input
                        type='text'
                        placeholder='Projetos que participou'
                    />
                     <label>URL da foto do Naver</label>
                    <input
                        type='text'
                        placeholder='URL da foto do Naver'
                    />
                  
                    <button type='submit'>Salvar</button>
                </Group>
                </FormNavers>
                </Content>
        </>
    )
};

export default NaversAdd;