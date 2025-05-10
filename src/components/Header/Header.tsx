import React from 'react';
import Logo from './Logo';
import NavigationBar from './NavigationBar';

const Header: React.FC = () => {
  return (
    <header>
      {/* Accessibility Bar */}
      <div className="bg-[#0047B9] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#menu" className="text-sm flex items-center">
              <span className="bg-white text-[#0047B9] rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">1</span>
              Ir para Menu
            </a>
            <a href="#busca" className="text-sm flex items-center">
              <span className="bg-white text-[#0047B9] rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">2</span>
              Ir para Buscador
            </a>
            <a href="#rodape" className="text-sm flex items-center">
              <span className="bg-white text-[#0047B9] rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">3</span>
              Ir para Rodapé
            </a>
            <a href="#mapa-site" className="text-sm flex items-center">
              <span className="bg-white text-[#0047B9] rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">4</span>
              Ir para o Mapa do Site
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm">
              <span className="mr-1">ALTO CONTRASTE</span>
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-sm font-bold">A+</button>
              <button className="text-sm">A</button>
              <button className="text-sm">A-</button>
            </div>
            <button className="flex items-center text-sm">
              Acessibilidade
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="border-b border-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Logo />
          <NavigationBar />
        </div>
      </div>
    </header>
  );
};

export default Header;