import React from 'react';
import { useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  current: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, current }) => {
  const isActive = current === to;
  
  return (
    <a 
      href={to}
      className={`px-4 py-6 text-base font-medium transition-colors hover:text-[#5e17eb] ${
        isActive ? 'text-[#5e17eb] border-b-2 border-[#5e17eb]' : 'text-gray-700'
      }`}
    >
      {children}
    </a>
  );
};

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex items-center space-x-2">
      <NavLink to="/institucional" current={currentPath}>Institucional</NavLink>
      <NavLink to="/ouvidoria" current={currentPath}>Ouvidoria</NavLink>
      <NavLink to="/portal-da-transparencia" current={currentPath}>Portal da Transparência</NavLink>
      <NavLink to="/raizes-do-bem" current={currentPath}>Raízes do Bem</NavLink>
      <NavLink to="/eventos" current={currentPath}>Eventos</NavLink>
      <NavLink to="/mapa" current={currentPath}>Mapa</NavLink>
      <a href="/entrar" className="ml-6 text-base font-medium text-[#0066CC] hover:text-[#5e17eb] transition-colors">
        Entrar
      </a>
    </nav>
  );
};

export default NavigationBar;