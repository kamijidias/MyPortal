
import React from 'react';
import { Container } from './styles';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  onLogout?: () => void;
}

const NavBar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <Container>
      <NavLink to={"/"} style={{ textDecoration: 'none', color: '#000' }}>Sair</NavLink>
    </Container>
  );
};

export default NavBar;