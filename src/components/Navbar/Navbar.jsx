import React from 'react';
import { useHistory } from 'react-router-dom';

import { Nav } from './styles';

import logoImg from '../../assets/logoNave.png';

import { logout } from '../../services/auth';

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <Nav>
      <a href="https://nave.rs/" rel='noopener noreferrer' target='_blank'>
        <img src={logoImg} alt='Nave logo' />
     </a>
     <button type='submit' onClick={handleLogout}>Sair</button>
    </Nav>
  );
};

export default Navbar;