import React from 'react';
import Hero from '../components/Hero/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder content for demonstration */}
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-[#0066CC]">
              <h3 className="text-xl font-bold mb-2">Serviços Municipais</h3>
              <p className="text-gray-600">
                Acesse os serviços oferecidos pela Prefeitura do Recife.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-[#0066CC]">
              <h3 className="text-xl font-bold mb-2">Agenda Cultural</h3>
              <p className="text-gray-600">
                Confira a programação cultural da cidade para o mês.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-[#0066CC]">
              <h3 className="text-xl font-bold mb-2">Notícias</h3>
              <p className="text-gray-600">
                Mantenha-se informado sobre as últimas notícias da cidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;