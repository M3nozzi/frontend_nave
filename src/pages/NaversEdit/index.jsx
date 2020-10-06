import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi';

import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';

import api from '../../services/api';

import { FormNavers, Head, Group, Content, Error } from './styles';

const NaversEdit = ({ match }) => {
    const history = useHistory();
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => { setModalVisible(true); history.push('/home') };

    const [ loading, setLoading ] = useState(false)
    const [ inputError, setInputError ] = useState(false)
    
    const [ name, setName ] = useState('')
    const [ job_role, setJob_rol ] = useState('')
    const [ admission_date, setAdmission_date ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ project, setProject ] = useState('')
    const [ url, setUrl ] = useState('')

    useEffect(() => {
        setInputError(false)
    }, [name, job_role, admission_date, birthdate, project, url])

    useEffect(() => {
        async function requestApi() {
            const response = await api.get(`navers/${match.params.id}`);
            let dateAdmission = response.data.admission_date.split('T');
            let dateBirthday = response.data.birthdate.split('T');
            setName(response.data.name)
            setJob_rol(response.data.job_role)
            setAdmission_date(dateAdmission[0])
            setBirthdate(dateBirthday[0])
            setProject(response.data.project)
            setUrl(response.data.url)
        }
        requestApi()
    }, [match.params.id]);

    const reverseDate = date => {
        const reverse = date.split('-').reverse().join('/')
        return reverse
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const naver = {
            job_role,
            admission_date: reverseDate(admission_date),
            birthdate: reverseDate(birthdate),
            project,
            name,
            url,
        };

        try {
            await api.put(`navers/${match.params.id}`, naver)
            handleModalVisible();
            history.push('/home');
        } catch(err){
            setLoading(false)
            setInputError('erro no preenchimento dos campos')
        }
    };

    return (
        <>
            <Navbar />
            <Content>
                <Head>
                    <Link to='/home'>
                        <FiChevronLeft size={32} />
                    </Link>
                    <h1>Editar Naver</h1> 
                </Head>
                <FormNavers hasError={!!inputError} onSubmit={handleSubmit}>
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
                        {inputError && <Error>{inputError}</Error> }
                    </Group>
                    <Group>
                        <label>Cargo</label>
                        <input
                            type='text'
                            value={job_role}
                            placeholder='Cargo'
                            onChange={(e) => setJob_rol(e.target.value)}
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
            </Content>
            <Modal visible={modalVisible} setVisible={setModalVisible} history = {history}>
                Naver criado,Naver criado com sucesso!
            </Modal>
        </>
    )
};

export default NaversEdit;