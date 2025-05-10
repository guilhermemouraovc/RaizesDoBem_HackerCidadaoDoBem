import React from 'react';
import { Sprout, Recycle } from 'lucide-react';

const InfoBanner: React.FC = () => {
  return (
    <section className="py-10 bg-[#0047B9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">O que é compostagem?</h2>
            <p className="text-lg leading-relaxed">
              A compostagem é um processo biológico de decomposição de matéria orgânica que 
              transforma resíduos em adubo. Esse procedimento ajuda a reduzir a quantidade de 
              lixo nos aterros e produz um fertilizante natural excelente para plantas.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-12 flex flex-col space-y-6">
            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full mr-4">
                <Sprout size={24} className="text-[#0046AD]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Benefícios para o solo</h3>
                <p>Enriquece o solo com nutrientes naturais, melhora a retenção de água e promove o crescimento saudável das plantas.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full mr-4">
                <Recycle size={24} className="text-[#0046AD]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Redução de resíduos</h3>
                <p>Até 30% do lixo doméstico pode ser compostado, diminuindo significativamente a quantidade de resíduos enviados para aterros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
