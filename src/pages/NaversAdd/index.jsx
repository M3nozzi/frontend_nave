import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi';
import SyncLoader from 'react-spinners/SyncLoader';

import api from '../../services/api';

import Navbar from '../../components/Navbar/Navbar';

import Modal from '../../components/Modal/Modal';

import { FormNavers, Head, Group, Content, Error } from './styles';

const NaversAdd = () => {
    const history = useHistory()
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => { setModalVisible(true)};

    const [ loading, setLoading ] = useState(false)
    const [ inputError, setInputError ] = useState(false)
      
    const [ name, setName ] = useState('')
    const [ job_role, setJob_role ] = useState('')
    const [ admission_date, setAdmission_date ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ project, setProject ] = useState('')
    const [ url, setUrl ] = useState('')

    

    useEffect( () => {
        setInputError(false)
    }, [name, job_role, admission_date, birthdate, project, url])

    const reverseDate = date => {
        const reverse = date.split('-').reverse().join('/')
        return reverse
    }

    const handleSubmit = async e => {
        e.preventDefault()
    
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
            handleModalVisible();
            setTimeout(() => history.push('/home'), 3000);
        } catch(e){
            setLoading(false)
            setInputError('erro no preenchimento dos campos: mínimo de 3 caracteres')
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
                        
                        <label>Data de nascimento</label>
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
                        {inputError && <Error>{inputError}</Error> }
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
                        
                        <label>Data que iniciou na empresa</label>
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
                                loading ? <SyncLoader size={5} margin={2}/> : 'Salvar'
                            }
                             
                        </button>
                    </Group>
                </FormNavers>
            </Content>
            <Modal visible={modalVisible} setVisible={setModalVisible} history = {history}>
                Naver criado,Naver criado com sucesso!
            </Modal>
        </>
    )
};

export default NaversAdd;