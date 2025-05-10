import React from 'react';
import LocationCard from './LocationCard';

const locations = [
  {
    id: 1,
    name: 'Parque da Jaqueira',
    address: 'Av. Rui Barbosa, s/n - Jaqueira, Recife - PE',
    openingHours: 'Segunda a Sexta: 8h às 17h | Sábado: 8h às 12h'
  },
  {
    id: 2,
    name: 'Praça do Derby',
    address: 'Praça do Derby, s/n - Derby, Recife - PE',
    openingHours: 'Segunda a Sexta: 8h às 17h | Sábado: 8h às 12h'
  },
  {
    id: 3,
    name: 'Parque Dona Lindu',
    address: 'Av. Boa Viagem, s/n - Boa Viagem, Recife - PE',
    openingHours: 'Segunda a Domingo: 8h às 17h'
  },
  {
    id: 4,
    name: 'Compaz Dom Hélder Câmara',
    address: 'R. Lourenço de Sá, 140 - Boa Vista, Recife - PE',
    openingHours: 'Segunda a Sexta: 9h às 18h'
  }
];

const ColetaLocations: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#5e17eb] mb-2">Pontos de Coleta</h2>
        <p className="text-gray-600 mb-6">
          Conheça os pontos de coleta de resíduos compostáveis em Recife e contribua com o meio ambiente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              address={location.address}
              openingHours={location.openingHours}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColetaLocations;