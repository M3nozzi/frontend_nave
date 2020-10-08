import React, { useState, useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { FaPen, FaTrash }  from 'react-icons/fa';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';
import ModalCard from '../../components/Modal/ModalCard';

import { Container, Navers, List, Group, BtnContent } from './styles';

const Dashboard = () => {
    
    const [navers, setNavers] = useState([])
    const [id, setID] = useState('')
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    const [idModal, setIdModal] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [newModalVisible, setNewModalVisible] = useState(false);
    const [idNewModal, setIdNewModal] = useState('');

    const [modalDelete, setModalDelete] = useState(false);

    const handleModalDelete = () => {
        setModalDelete(true);
    }

    const handleModalVisible = (id) => {

        setIdModal(id)
        setModalVisible(true)
    };
    

    const handleNewModalVisible = (id) => {
        setIdNewModal(id) 
        setNewModalVisible(true)
    };

    const closeModal = () => {
        setModalVisible(false);
    }
    

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
    
    }, []);
    
    async function deleteNavers(id) {
        try {
            await api.delete(`navers/${id}`);
            setNavers(navers.filter((navers) => navers.id !== id));
            closeModal();
            handleModalDelete();
            setTimeout(() => window.location.reload(), 1500);
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
                            <div className='CardContent' key={navers.id}>
                                <button onClick={() => handleNewModalVisible(navers.id)}><img width="281" height="281" src={navers.url} alt={navers.name} /></button>
                                <h4>{navers.name}</h4>
                                <p>{navers.job_role}</p>
                                <BtnContent>
                                    <button onClick={()=> handleModalVisible(navers.id)}><FaTrash size={20} /></button> 
                                    <Link key={navers.id} to={`/update/${navers.id}`}><FaPen size={20} /></Link>
                                </BtnContent>
                            </div>
                        </Navers>
                    )
                })
                }
            </List>) : (
                    <Group>
                        <SyncLoader size={15} margin={2}/>
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


            <Modal
                visible={modalDelete}
                setVisible={setModalDelete}
                buttons={false}
            >
                Naver excluído, naver excluído com sucesso!
            </Modal>

            { newModalVisible && (
                 <ModalCard
                 visible={newModalVisible}
                 setVisible={setNewModalVisible}
                 id={idNewModal}
                 handleModalVisible={handleModalVisible}
                />
            )}
           
        </>
    )
};

export default Dashboard;
