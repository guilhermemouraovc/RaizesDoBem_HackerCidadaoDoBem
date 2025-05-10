import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[280px] flex items-center" 
         style={{ 
           backgroundImage: 'linear-gradient(rgba(0, 71, 185, 0.7), rgba(0, 71, 185, 0.7)), url("https://images.pexels.com/photos/3973335/pexels-photo-3973335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
         }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
          A Prefeitura do Recife mais perto de você
        </h1>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="O que você procura?"
              className="w-full py-3 px-4 rounded-md pr-12"
              aria-label="Campo de busca"
            />
            <button 
              className="absolute right-0 top-0 bottom-0 bg-[#0066CC] text-white px-4 rounded-r-md"
              aria-label="Botão de busca"
            >
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;