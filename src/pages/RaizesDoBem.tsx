import React from 'react';
import ColetaLocations from '../components/RaizesDoBem/ColetaLocations';
import CompostingForm from '../components/RaizesDoBem/CompostingForm';
import InfoBanner from '../components/RaizesDoBem/InfoBanner';

const RaizesDoBem: React.FC = () => {
  return (
    <div>
      {/* ← Banner de compostagem */}
      <div className="w-full overflow-hidden">
        <img
          src="/dist/assets/bg-hackathon2.png"
          alt="Compostagem no Recife"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* → Título “Raízes do Bem” */}
      <div className="bg-[#7ed957] bg-opacity-10 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#0047B9]">
            Raízes do Bem
          </h1>
          <p className="text-gray-700 mt-2">
            Iniciativa de compostagem comunitária para um Recife mais sustentável
          </p>
        </div>
      </div>

      {/* → restante do conteúdo */}
      <InfoBanner />
      <ColetaLocations />
      <CompostingForm />
    </div>
  );
};

export default RaizesDoBem;
