import React, { useState } from 'react';

const meetupDates = [
  { id: 1, date: '15/06/2025', location: 'Parque da Jaqueira' },
  { id: 2, date: '22/06/2025', location: 'Praça do Derby' },
  { id: 3, date: '29/06/2025', location: 'Parque Dona Lindu' }
];

const CompostingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMeetup, setSelectedMeetup] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setSelectedMeetup('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#5e17eb] mb-2">Encontro de Compostagem</h2>
          <p className="text-gray-600 mb-6">
            Participe dos nossos encontros de compostagem e aprenda técnicas sustentáveis para cuidar do meio ambiente.
          </p>
          
          {submitSuccess ? (
            <div className="bg-[#7ed957] bg-opacity-20 border border-[#7ed957] text-green-800 rounded-md p-4 mb-6">
              <p className="font-medium">Inscrição realizada com sucesso!</p>
              <p className="text-sm">Enviamos um e-mail de confirmação com todas as informações do encontro.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#5e17eb] focus:border-[#5e17eb]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#5e17eb] focus:border-[#5e17eb]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="meetup" className="block text-sm font-medium text-gray-700 mb-1">
                  Selecione o Encontro
                </label>
                <select
                  id="meetup"
                  value={selectedMeetup}
                  onChange={(e) => setSelectedMeetup(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#5e17eb] focus:border-[#5e17eb]"
                  required
                >
                  <option value="">Selecione uma data e local</option>
                  {meetupDates.map((meetup) => (
                    <option key={meetup.id} value={meetup.id.toString()}>
                      {meetup.date} - {meetup.location}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5e17eb] text-white py-2 px-4 rounded-md hover:bg-[#4a12bd] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5e17eb] disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Inscrever-se'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompostingForm;