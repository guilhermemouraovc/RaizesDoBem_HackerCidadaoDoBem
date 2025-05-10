import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import RaizesDoBem from './pages/RaizesDoBem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-['Poppins']">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raizes-do-bem" element={<RaizesDoBem />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-[#0047B9] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Conecta Recife</h3>
                <p className="text-sm">
                  Prefeitura do Recife<br />
                  Av. Cais do Apolo, 925, Bairro do Recife<br />
                  Recife/PE - CEP: 50030-903
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:underline">Portal da Transparência</a></li>
                  <li><a href="#" className="hover:underline">Ouvidoria</a></li>
                  <li><a href="#" className="hover:underline">Legislação Municipal</a></li>
                  <li><a href="#" className="hover:underline">Raízes do Bem</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contato</h3>
                <ul className="space-y-2 text-sm">
                  <li>Telefone: (81) 3355-8000</li>
                  <li>E-mail: prefeitura@recife.pe.gov.br</li>
                </ul>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    Facebook
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Instagram
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-blue-700 text-center text-sm">
              <p>© 2025 Prefeitura do Recife. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;