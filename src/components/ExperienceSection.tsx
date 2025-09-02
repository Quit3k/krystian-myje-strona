import React from 'react';
import { Award, ShieldCheck, Camera, Heart } from 'lucide-react';

const ExperienceSection = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-gold" />,
      title: "Wieloletnie Doświadczenie",
      description: "Ponad 5 lat praktyki to gwarancja najwyższej jakości i wiedzy, jak radzić sobie z najtrudniejszymi zabrudzeniami."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-gold" />,
      title: "Profesjonalny Sprzęt",
      description: "Korzystam z myjek ciśnieniowych i specjalistycznej chemii, co zapewnia skuteczność i bezpieczeństwo czyszczonych powierzchni."
    },
    {
      icon: <Camera className="w-12 h-12 text-gold" />,
      title: "Dokumentacja Zdjęciowa",
      description: "Otrzymujesz zdjęcia przed i po realizacji. Masz pełną kontrolę i pewność wykonanej pracy, nawet będąc daleko."
    },
    {
      icon: <Heart className="w-12 h-12 text-gold" />,
      title: "Indywidualne Podejście",
      description: "Każde zlecenie traktuję z pełnym zaangażowaniem, analizując Twoje potrzeby, by zaproponować najlepsze rozwiązanie."
    }
  ];

  return (
    <section id="why-me-section" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Dlaczego Warto <span className="text-gold">Mi Zaufać?</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Moje zaangażowanie i profesjonalizm to gwarancja Twojego zadowolenia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gold/30"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-sans text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="font-sans text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
