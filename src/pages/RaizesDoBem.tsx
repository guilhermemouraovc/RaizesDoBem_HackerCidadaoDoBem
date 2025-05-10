import React from 'react';
import ColetaLocations from '../components/RaizesDoBem/ColetaLocations';
import CompostingForm from '../components/RaizesDoBem/CompostingForm';
import InfoBanner from '../components/RaizesDoBem/InfoBanner';

const RaizesDoBem: React.FC = () => {
  return (
    <div>
      <div className="bg-[#7ed957] bg-opacity-10 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#5e17eb]">Raízes do Bem</h1>
          <p className="text-gray-700 mt-2">
            Iniciativa de compostagem comunitária para um Recife mais sustentável
          </p>
        </div>
      </div>
      
      <InfoBanner />
      <ColetaLocations />
      <CompostingForm />
    </div>
  );
};

export default RaizesDoBem;