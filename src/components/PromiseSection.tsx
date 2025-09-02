import React from 'react';
import { ArrowRight } from 'lucide-react';
import mycie2 from '../assets/mycie2.webp';
import mycie3 from '../assets/mycie3.avif';

const PromiseSection = () => {
  
  const steps = [
    {
      number: "01",
      title: "Kontakt i Darmowa Wycena",
      description: "Zadzwoń lub napisz, opisz swoje potrzeby i jeśli to możliwe, prześlij zdjęcie. Przygotuję dla Ciebie darmową, niezobowiązującą wycenę."
    },
    {
      number: "02",
      title: "Ustalenie Terminu i Szczegółów",
      description: "Po akceptacji kosztów, wspólnie wybierzemy najbardziej dogodny dla Ciebie termin. Omówimy też wszystkie szczegóły dotyczące zlecenia."
    },
    {
      number: "03",
      title: "Profesjonalna Realizacja Usługi",
      description: "W umówionym dniu pojawię się na miejscu z całym potrzebnym sprzętem. Ty możesz odpocząć, a ja zajmę się przywróceniem blasku Twojej przestrzeni."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offer" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:pl-4 lg:pr-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Zobacz, jakie to <span className="text-gold">proste</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Perfekcyjnie czysta przestrzeń w trzech prostych krokach.
          </p>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative w-full order-2 lg-order-1">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gold/30"></div>
            
            <div className="space-y-16 pl-0">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-50 relative">
                      <span className="font-sans text-5xl text-gold font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl text-gray-900 mb-3 font-bold">{step.title}</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm h-80">
              {/* ZMIANA: Ścieżki do obrazów jako stringi, aby uniknąć błędu importu */}
              <img 
                src={mycie2}
                alt="Czyszczenie nagrobka z lastryko przed i po" 
                className="absolute top-0 left-0 w-4/5 h-auto object-cover rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={mycie3}
                alt="Mycie zabrudzonej kostki brukowej" 
                className="absolute top-1/2 right-0 w-4/5 h-auto object-cover rounded-2xl shadow-xl z-10 transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <button
              onClick={scrollToContact}
              className="hidden lg:block bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 mt-20"
            >
              Zadzwoń do mnie
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center lg:hidden">
            <button
              onClick={scrollToContact}
              className="bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Zadzwoń do mnie
            </button>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;

