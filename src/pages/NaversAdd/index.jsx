import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Navbar from '../../components/Navbar/Navbar';

import Modal from '../../components/Modal/Modal';

import { FormNavers, Head, Group, Content } from './styles';

const NaversAdd = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => { setModalVisible(true); };
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
                        
                        <label>Idade</label>
                        <input
                            type='date'
                            placeholder='Idade'
                        />

                        <label>Projetos que participou</label>
                        <input
                            type='text'
                            placeholder='Projetos que participou'
                        />  
                    </Group>
                    <Group>
                        <label>Cargo</label>
                        <input
                            type='text'
                            placeholder='Cargo'
                        />
                        
                        <label>Tempo de Empresa</label>
                        <input
                            type='text'
                            placeholder='Tempo de empresa'
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
            <button onClick={handleModalVisible}>Abrir Modal</button>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                Naver criado,Naver criado com sucesso!
            </Modal>
        </>
    )
};

export default NaversAdd;