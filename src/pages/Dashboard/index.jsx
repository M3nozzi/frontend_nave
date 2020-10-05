import React from 'react';
// import api from '../../services/api';
import {  Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import { Navers } from './styles';

const Dashboard = () => {
    return (
        <>
            <Navbar />
             <Navers>
                <h1>Navers</h1>
                <Link  to='/naversadd'>
                    <button type='submit'>Adicionar</button>
                </Link>
            </Navers>
        </>
    )
};

export default Dashboard;