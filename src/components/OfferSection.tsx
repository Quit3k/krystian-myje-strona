import React from 'react';
import { Sparkles, LayoutGrid, SprayCan, ArrowRight } from 'lucide-react';

const OfferSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: "Czyszczenie i pielęgnacja grobów",
      description: "Profesjonalne czyszczenie nagrobków z każdego kamienia oraz impregnacja zapewniająca długotrwałą ochronę."
    },
    {
      icon: <LayoutGrid className="w-8 h-8 text-gold" />,
      title: "Mycie kostki brukowej",
      description: "Usuwanie mchu, glonów, plam z oleju i rdzy. Końcowe fugowanie piaskiem kwarcowym dla perfekcyjnego efektu."
    },
    {
      icon: <SprayCan className="w-8 h-8 text-gold" />,
      title: "Usuwanie graffiti",
      description: "Skuteczne i bezpieczne usuwanie graffiti ze ścian, szkła i innych powierzchni, bez ryzyka uszkodzeń czy zarysowań."
    }
  ];

  const pricing = [
    { item: "Czyszczenie kostki brukowej", price: "od 5 zł/m²" },
    { item: "Czyszczenie grobów (lastryko)", price: "od 200-400 zł" },
    { item: "Mycie nagrobków (granit)", price: "od 130 zł" },
    { item: "Usuwanie plam po wosku", price: "Wycena indywidualna" },
    { item: "Inne prace i usuwanie graffiti", price: "Kontakt telefoniczny" }
  ];

  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    if (section) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const sectionRect = section.getBoundingClientRect().top;
        const sectionPosition = sectionRect - bodyRect;
        const offsetPosition = sectionPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    // ZMIANA: Poprawione ID na 'offer', aby nawigacja działała poprawnie
    <section id="offer" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Moja <span className="text-gold">Oferta</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Sprawdź zakres moich usług dla Rzeszowa i okolic (do 30km). Do każdego zlecenia podchodzę indywidualnie.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-8">
          <div className="col-span-6 flex flex-col space-y-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-6 h-full border border-gray-100">
                <div className="flex-shrink-0 bg-gold/10 p-4 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-sans text-2xl text-gray-900 mb-2 font-bold">{service.title}</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-6 flex flex-col">
            <div className="bg-white p-8 rounded-xl shadow-lg flex-grow flex flex-col border border-gray-100">
              <h3 className="font-sans text-4xl text-center text-gray-900 mb-8 font-bold">Cennik</h3>
              <div className="space-y-5 flex-grow">
                {pricing.map((priceItem, index) => (
                  <div key={index} className="flex justify-between items-baseline border-b-2 border-dashed border-gray-200 pb-3">
                    <p className="font-sans text-gray-700">{priceItem.item}</p>
                    <p className="font-sans text-xl font-bold text-gold text-right whitespace-nowrap pl-4">{priceItem.price}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-center text-sm text-gray-500 mt-6">
                Podane ceny są orientacyjne. Końcowy koszt zależy od wielkości i stopnia zabrudzenia powierzchni.
              </p>
            </div>
            <button
              onClick={scrollToHowItWorks}
              className="bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 mt-6 flex items-center justify-center group"
            >
              <span>Zobacz jak się umówić</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
        <div className="lg:hidden">
          <div className="space-y-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4 border border-gray-100">
                <div className="flex-shrink-0 bg-gold/10 p-3 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-sans text-xl text-gray-900 mb-2 font-bold">{service.title}</h3>
                  <p className="font-sans text-base text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-sans text-3xl text-center text-gray-900 mb-6 font-bold">Cennik</h3>
            <div className="space-y-4">
              {pricing.map((priceItem, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-sans text-gray-700 text-lg">{priceItem.item}</p>
                  <p className="font-sans text-xl font-bold text-gold text-left mt-1">{priceItem.price}</p>
                </div>
              ))}
            </div>
              <p className="font-sans text-center text-sm text-gray-500 mt-6">
                Podane ceny są orientacyjne i zależą od stopnia zabrudzenia.
              </p>
          </div>
          
          <div className="text-center mt-8">
              <button
                onClick={scrollToHowItWorks}
                className="bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Jak się umówić?
              </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfferSection;

