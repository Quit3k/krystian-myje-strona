import React from 'react';
import { Star } from 'lucide-react';
// ZMIANA: Import nowego zdjęcia
import cleaningImage from '../assets/mycie1.jpeg';

const HeroSection = () => {
  // ZMIANA: Funkcja przewijania do realizacji
  const scrollToRealizations = () => {
    const realizationsSection = document.getElementById('realizations'); // Pamiętaj nadać to ID sekcji z realizacjami
    realizationsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // ZMIANA: Funkcja przewijania do oferty (zaktualizowane ID)
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-white min-h-screen flex items-center overflow-x-hidden pt-24 lg:pt-0">
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative transform lg:translate-x-8 block order-1 lg:order-2 w-full px-4 lg:px-0 lg:w-[70%]">
            <img
              // ZMIANA: Nowe zdjęcie i tekst alternatywny
              src={cleaningImage}
              alt="Profesjonalne czyszczenie kostki brukowej myjką ciśnieniową"
              className="w-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="hidden lg:flex absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg z-10 items-center space-x-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <div className="font-sans text-lg font-bold text-gray-900">Perfekcyjna Obsługa</div>
                <div className="font-sans text-sm text-gray-600">Gwarancja zadowolenia</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="space-y-8 lg:space-y-6 text-center lg:text-left px-4 sm:px-6 lg:pl-8 lg:max-w-2xl transform lg:-translate-x-8">
              <div className="hidden lg:flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
                <span className="font-sans text-gray-600 ml-2">Najwyżej oceniana usługa</span>
              </div>
              
              {/* ZMIANA: Nowe teksty */}
              <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Przywróć Blask Twojemu Otoczeniu
              </h1>

              <p className="font-sans text-2xl text-gold">
                Profesjonalne mycie grobów i kostki brukowej.
              </p>
              
              <p className="hidden lg:block font-sans text-xl text-gray-600 leading-relaxed">
                Z pasją dbamy o estetykę Twojej przestrzeni. Specjalizujemy się w czyszczeniu grobów, kostki brukowej i usuwaniu graffiti w Rzeszowie i na terenie Podkarpacia.
              </p>
              
              {/* ZMIANA: Przyciski */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToRealizations}
                  className="bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Zobacz realizacje
                </button>
                
                <button
                  onClick={scrollToOffer}
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Sprawdź jakie to proste</span>
                </button>
              </div>
              
              {/* ZMIANA: Statystyki */}
              <div className="hidden lg:grid grid-cols-3 gap-8 pt-8 lg:pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="font-sans text-3xl text-gold font-bold">500+</div>
                  <div className="font-sans text-sm text-gray-600">Profesjonalnych Realizacji</div>
                </div>
                <div className="text-center">
                  <div className="font-sans text-3xl text-gold font-bold">5+</div>
                  <div className="font-sans text-sm text-gray-600">Lat Doświadczenia</div>
                </div>
                <div className="text-center">
                  <div className="font-sans text-3xl text-gold font-bold">24/7</div>
                  <div className="font-sans text-sm text-gray-600">Dostępność</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;