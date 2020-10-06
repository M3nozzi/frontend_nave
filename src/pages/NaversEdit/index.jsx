import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi';

import Navbar from '../../components/Navbar/Navbar';

import api from '../../services/api';

import { FormNavers, Head, Group, Content } from './styles';

const NaversEdit = ({ match }) => {
    const history = useHistory();
    const [modalVisible, setModalVisible] = useState(false);
    const handleModalVisible = () => { setModalVisible(true); history.push('/home') };

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    
    const [ name, setName ] = useState('')
    const [ job_role, setJob ] = useState('')
    const [ admission_date, setAdmission ] = useState('')
    const [ birthdate, setBirthdate ] = useState('')
    const [ project, setProject ] = useState('')
    const [ url, setUrl ] = useState('')

    useEffect(() => {
        setError(false)
    }, [name, job_role, admission_date, birthdate, project, url])

    useEffect(() => {
        async function requestApi() {
            const response = await api.get(`navers/${match.params.id}`);
            let dateAdmission = response.data.admission_date.split('T');
            let dateBirthday = response.data.birthdate.split('T');
            setName(response.data.name)
            setJob(response.data.job_role)
            setAdmission(dateAdmission[0])
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

        setLoading(true)

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
        } catch(e){
            setLoading(false)
            setError(true)
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
                <FormNavers onSubmit={handleSubmit}>
                    <Group>
                        <label>Nome</label>
                        <input
                            type='text'
                            value={name}
                            placeholder='Nome'
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                        <label>Idade</label>
                        <input
                            type='date'
                            value={birthdate}
                            placeholder='Idade'
                            onChange={(e) => setBirthdate(e.target.value)}
                        />

                        <label>Projetos que participou</label>
                        <input
                            type='text'
                            value={project}
                            placeholder='Projetos que participou'
                            onChange={(e) => setProject(e.target.value)}
                        />  
                    </Group>
                    <Group>
                        <label>Cargo</label>
                        <input
                            type='text'
                            value={job_role}
                            placeholder='Cargo'
                            onChange={(e) => setJob(e.target.value)}
                        />
                        
                        <label>Tempo de Empresa</label>
                        <input
                            type='date'
                            value={admission_date}
                            placeholder='Tempo de empresa'
                            onChange={(e) => setAdmission(e.target.value)}
                        />
                    
                        <label>URL da foto do Naver</label>
                        <input
                            type='text'
                            value={url}
                            placeholder='URL da foto do Naver'
                            onChange={(e) => setUrl(e.target.value)}
                        />
                  
                        <button type='submit'>
                            {
                                loading ? "loading" : "Salvar"
                            }
                             
                        </button>
                    </Group>
                </FormNavers>
            </Content>
        </>
    )
};

export default NaversEdit;