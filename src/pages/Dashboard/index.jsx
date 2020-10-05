import React from 'react';
// import api from '../../services/api';

import Navbar from '../../components/Navbar/Navbar';

import { Navers } from './styles';

const Dashboard = () => {
    return (
        <>
            <Navbar />
             <Navers>
                <h1>Navers</h1>
                <button type='submit'>Adicionar</button>
            </Navers>
        </>
    )
};

export default Dashboard;