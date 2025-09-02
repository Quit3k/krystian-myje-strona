import React from 'react';
import CarCard from './CarCard';

// Import zdjęć
import car1img1 from '../assets/lim1.1.png';
import car1img2 from '../assets/lim1.2.png';
import car1img3 from '../assets/lim1.3.png';
import car1img4 from '../assets/lim1.4.png';
import car1img5 from '../assets/lim1.5.png';
import car1img6 from '../assets/lim1.6.png';

import car2img1 from '../assets/lim2.1.png';
import car2img2 from '../assets/lim2.2.png';
import car2img3 from '../assets/lim2.3.png';
import car2img4 from '../assets/lim2.4.png';
import car2img5 from '../assets/lim2.5.png';
import car2img6 from '../assets/lim2.6.png';

import car3img1 from '../assets/lim3.1.png';
import car3img2 from '../assets/lim3.2.png';
import car3img3 from '../assets/lim3.3.png';
import car3img4 from '../assets/lim3.4.png';
import car3img5 from '../assets/lim3.5.png';
import car3img6 from '../assets/lim3.6.png';

import car4img1 from '../assets/lim4.1.png';
import car4img2 from '../assets/lim4.2.png';

const FleetSection = () => {
  const cars = [
    {
      id: 4,
      title: "Mercedes CLS 50S MKB",
      description: "To nie jest seryjny samochód. Limitowana wersja po profesjonalnym tuningu niemieckiej firmy MKB łączy sportowy charakter z ponadczasową elegancją. Lakier Alabaster White robi niesamowite wrażenie.",
      features: [
        { icon: "🏆", text: "Limitowana wersja MKB" },
        { icon: "⚙️", text: "Silnik V8, 400KM" },
        { icon: "💎", text: "Połączenie sportu i elegancji" }
      ],
      images: [ car1img1, car1img2, car1img3, car1img4, car1img5, car1img6 ]
    },
    {
      id: 1,
      title: "Cadillac De Ville 1966 r.",
      description: "Synonim prestiżu i luksusu tamtych lat. Samochód Elvisa Presleya i Marilyn Monroe. Ten 6-osobowy amerykański krążownik zachwyca bogatym wyposażeniem i jest w 100% oryginalny.",
      features: [
        { icon: "👥", text: "6-osobowy" },
        { icon: "⚙️", text: "Silnik 7.0L V8, 345KM" },
        { icon: "❄️", text: "Klimatyzacja i pełna elektryka" }
      ],
      images: [ car2img1, car2img2, car2img3, car2img4, car2img5, car2img6 ]
    },
    {
      id: 2,
      title: "Dodge Dart Pioneer 1961 r.",
      description: "Samochód absolutnie unikatowy – jedyny taki egzemplarz w Polsce! Jego niepowtarzalny design z ery 'space-age' budzi podziw i gwarantuje, że nikt nie przejdzie obok obojętnie.",
      features: [
        { icon: "🇵🇱", text: "Jedyny egzemplarz w Polsce" },
        { icon: "⚙️", text: "Oryginalny silnik 3.7L" },
        { icon: "🎨", text: "Unikatowy design i styl" }
      ],
      images: [ car3img1, car3img2, car3img3, car3img4, car3img5, car3img6 ]
    },
    {
      id: 3,
      title: "Buick Riviera 1971 r.",
      description: "Ikona amerykańskiej motoryzacji. Jego zjawiskowa i kontrowersyjna linia 'boat-tail' czyni go jednym z najpiękniejszych aut lat 70-tych. Prawdziwy 'Personal Luxury Car'.",
      features: [
        { icon: "🚀", text: "Potężny silnik 7.5L V8, 315KM" },
        { icon: "🎨", text: "Kultowy design 'boat-tail'" },
        { icon: "🚗", text: "Możliwość prowadzenia przez Młodą Parę" }
      ],
      images: [ car4img1, car4img2 ]
    }
  ];

  return (
    <section id="fleet-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Nasza <span className="text-gold">Prestiżowa</span> Flota
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Każdy pojazd w naszej kolekcji jest wyjątkowy i skrupulatnie przygotowany, aby uświetnić Twój najważniejszy dzień.
          </p>
        </div>
        
        <div className="space-y-16">
          {cars.map((car) => (
            // Przywrócona wersja bez dodatkowego opakowania
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;