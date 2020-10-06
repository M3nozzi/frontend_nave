import React, { useState, useEffect } from 'react';
import { VscLoading } from 'react-icons/vsc'
import { FaPen, FaTrash }  from 'react-icons/fa';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';

import { Container, Navers, List, Group } from './styles';

const Dashboard = () => {
    
    const [navers, setNavers] = useState([])
    const [idModal, setIdModal] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [load, setLoad] = useState(false);
    
    const handleModalVisible = (id) => {

        setIdModal(id)
        setModalVisible(true)
    };
    
    const closeModal = () => {
        setModalVisible(false);
    }
 
    const [id, setID] = useState('')

    
    const [error, setError] = useState('');

    useEffect(() => {
        let isMounted = true;
        api.get('navers')
            .then(res => {
                if (isMounted) {
                    setNavers(res.data);
                    setID([...id, ...res.data]);
                    setLoad(true);
                }
            })
            .catch(err => {
                setError(err.message);
                setLoad(true);
            })
        
        return () => {
            isMounted = false;
        } 
    
    }, [id]);
    
    async function deleteNavers(id) {
        try {
            await api.delete(`navers/${id}`);
            setNavers(navers.filter((navers) => navers.id !== id));
            closeModal();
        } catch {
            alert("erro ao deletar")
        }
    }

    return (
        <>
            <Navbar />
             <Container>
                <h1>Navers</h1>
                <Link  to='/create'>
                    <button type='submit'>Adicionar</button>
                </Link>
            </Container>
            {load ? (<List>
                {error ? <li>{error.message}</li> : navers.map(navers => {
                    return (
                        <Navers key={navers.id} >
                            <div key={navers.id}>
                                <img width="281" height="281" src={navers.url} alt={navers.name}/>
                                <strong>{navers.name}</strong>
                                <p>{navers.job_role}</p>
                               <button onClick={()=> handleModalVisible(navers.id)}><FaTrash size={20} /></button> 
                                <Link key={navers.id} to={`/update/${navers.id}`}><FaPen size={20}/></Link>
                            </div>
                        </Navers>
                    )
                })
                }
            </List>) : (
                    <Group>
                        <VscLoading size={90}/>
                    </Group>
                )
            }
            <Modal
                visible={modalVisible}
                setVisible={setModalVisible}
                buttons={true}
                deleteNavers={deleteNavers}
                id={idModal}
            >
                Excluir naver, Tem certeza que deseja excluir este Naver?
            </Modal>
        </>
    )
};

export default Dashboard;