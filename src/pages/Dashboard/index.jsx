import React, { useState, useEffect } from 'react';
import { VscLoading } from 'react-icons/vsc'
import { FaPen, FaTrash }  from 'react-icons/fa';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

import { Container, Navers, List } from './styles';

const Dashboard = () => {

    const [navers, setNavers] = useState([])
 
    const [id, setID] = useState('')

    const [load, setLoad] = useState(false);
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
                                <FaTrash size={18}/>
                                <Link key={navers.id} to={`/update/${navers.id}`}><FaPen size={18}/></Link>
                            </div>
                        </Navers>
                    )
                })
                }
            </List>) : (
                    <div>
                        <VscLoading size={30}/>
                    </div>
                )
            }
        </>
    )
};

export default Dashboard;