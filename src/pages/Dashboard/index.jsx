import React, { useState, useEffect } from 'react';
import { FaPen, FaTrash }  from 'react-icons/fa';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

import { Navers } from './styles';

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
             <Navers>
                <h1>Navers</h1>
                <Link  to='/create'>
                    <button type='submit'>Adicionar</button>
                </Link>
            </Navers>
            {load ? (<ul>
                {error ? <li>{error.message}</li> : navers.map(navers => {
                    return (
                        <div key={navers.id}>
                            <img width="281" height="281" src={navers.url} alt=''/>
                            <p>{navers.name}</p> <p>{navers.job_role}</p>
                            <FaTrash size={18}/>
                            <Link key={navers.id} to={`/update/${navers.id}`}><FaPen size={18}/></Link>
                        </div>
                    )
                })
                }
            </ul>) : (
                    <div>
                        Loading...
                    </div>
                )
            }
        </>
    )
};

export default Dashboard;