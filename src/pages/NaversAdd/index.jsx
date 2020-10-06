import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import Navbar from '../../components/Navbar/Navbar';

import Modal from '../../components/Modal/Modal';

import { FormNavers, Head, Group, Content } from './styles';

const NaversAdd = () => {
    const history = useHistory()
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => { setModalVisible(true); history.push('/home') };

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
      
    const [ name, setName ] = useState('')
    const [ job_role, setJob_role ] = useState('')
    const [ admission_date, setAdmission_date ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ project, setProject ] = useState('')
    const [ url, setUrl ] = useState('')

    

    useEffect( () => {
        setError(false)
    }, [name, job_role, admission_date, birthdate, project, url])

    const reverseDate = date => {
        const reverse = date.split('-').reverse().join('/')
        return reverse
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        const naver = {
            job_role,
            admission_date: reverseDate(admission_date),
            birthdate: reverseDate(birthdate),
            project,
            name,
            url,
        }

        try {
            await api.post('navers', naver)
            handleModalVisible()

        } catch(e){
            setLoading(false)
            setError(true)
        }
    }



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
                <FormNavers onSubmit={handleSubmit}>
                    <Group>
                        <label>Nome</label>
                        <input
                            type='text'
                            value={name}
                            placeholder='Nome'
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        
                        <label>Idade</label>
                        <input
                            type='date'
                            value={birthdate}
                            placeholder='Idade'
                            onChange={(e) => setBirthdate(e.target.value)}
                            required
                        />

                        <label>Projetos que participou</label>
                        <input
                            type='text'
                            value={project}
                            placeholder='Projetos que participou'
                            onChange={(e) => setProject(e.target.value)}
                            required
                        />  
                    </Group>
                    <Group>
                        <label>Cargo</label>
                        <input
                            type='text'
                            value={job_role}
                            placeholder='Cargo'
                            onChange={(e) => setJob_role(e.target.value)}
                            required
                        />
                        
                        <label>Tempo de Empresa</label>
                        <input
                            type='date'
                            value={admission_date}
                            placeholder='Tempo de empresa'
                            onChange={(e) => setAdmission_date(e.target.value)}
                            required
                        />
                    
                        <label>URL da foto do Naver</label>
                        <input
                            type='text'
                            value={url}
                            placeholder='URL da foto do Naver'
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                  
                        <button type='submit'>
                            {
                                loading ? "loading" : "Salvar"
                            }
                             
                        </button>
                    </Group>
                </FormNavers>
                    { error && <p> Campos com erros, verificar</p> }
            </Content>
            {/* <button onClick={handleModalVisible}>Abrir Modal</button> */}
            <Modal visible={modalVisible} setVisible={setModalVisible} history = {history}>
                Naver criado,Naver criado com sucesso!
            </Modal>
        </>
    )
};

export default NaversAdd;