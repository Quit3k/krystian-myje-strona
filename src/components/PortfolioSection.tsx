import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Przywrócono importy zgodnie z prośbą
import mycie4 from '../assets/mycie4.png';
import mycie5 from '../assets/mycie5.png';
import mycie6 from '../assets/mycie6.png';
import mycie7 from '../assets/mycie7.png';
import mycie8 from '../assets/mycie8.png';
import mycie9 from '../assets/mycie9.png';
import mycie10 from '../assets/mycie10.png';
import mycie11 from '../assets/mycie11.png';
import mycie12 from '../assets/mycie12.png';


const portfolioItems = [
  {
    image: mycie4,
    title: 'Mycie nagrobka z lastryko',
    description: 'Cmentarz Wilkowyja w Rzeszowie. Usunięto wieloletni mech oraz wykwity wapienne.'
  },
  {
    image: mycie5,
    title: 'Czyszczenie kostki brukowej',
    description: 'Prywatny podjazd. Usunięto uporczywe plamy po oleju silnikowym i mchy.'
  },
  {
    image: mycie6,
    title: 'Pielęgnacja grobu granitowego',
    description: 'Cmentarz Pobitno. Delikatne czyszczenie chemiczne i usunięcie śladów po wosku.'
  },
  {
    image: mycie7,
    title: 'Mycie parkingu firmowego',
    description: 'Zastosowano metodę antybryzgową, która zapewnia czystość bez chlapania na elewację.'
  },
  {
    image: mycie8,
    title: 'Usuwanie graffiti',
    description: 'Elewacja budynku w centrum Rzeszowa. Graffiti usunięto bez śladu i uszkodzenia tynku.'
  },
  {
    image: mycie9,
    title: 'Fugowanie kostki brukowej',
    description: 'Po czyszczeniu, fugi zostały uzupełnione piaskiem kwarcowym w celu stabilizacji.'
  },
  {
    image: mycie10,
    title: 'Renowacja liter na nagrobku',
    description: 'Precyzyjne odnowienie i malowanie liter na płycie nagrobnej dla lepszej czytelności.'
  },
  {
    image: mycie11,
    title: 'Czyszczenie ogrodzenia',
    description: 'Mycie ciśnieniowe betonowego ogrodzenia z glonów i zanieczyszczeń atmosferycznych.'
  },
  {
    image: mycie12,
    title: 'Efekt przed i po',
    description: 'Mocno zabrudzona ścieżka z kostki, która odzyskała swój pierwotny wygląd i kolor.'
  },
];

const INITIAL_VISIBLE_IMAGES = 6;

const PortfolioSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    if (window.innerWidth < 768) return; 
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const handleLoadMore = () => setVisibleCount(portfolioItems.length);

  const imagesToShow = portfolioItems.slice(0, visibleCount);

  return (
    <>
      <section id="portfolio" className="py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Moje <span className="text-gold">Realizacje</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Zobacz efekty mojej pracy. Każde zdjęcie to historia przywróconego blasku.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {imagesToShow.map((item, index) => (
              <div 
                key={index} 
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden cursor-pointer">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-6 text-center bg-white flex-grow flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {visibleCount < portfolioItems.length && (
            <div className="text-center mt-12">
              <button onClick={handleLoadMore} className="bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Pokaż więcej realizacji
              </button>
            </div>
          )}
        </div>
      </section>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50" onClick={closeLightbox}>
            <X size={40} />
          </button>
          
          <button className="absolute left-4 md:left-8 text-white hover:text-gold transition-colors z-50 p-2" onClick={goToPrev}>
            <ChevronLeft size={48} />
          </button>

          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={portfolioItems[selectedImageIndex].image} 
              alt={`Powiększenie: ${portfolioItems[selectedImageIndex].title}`} 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <button className="absolute right-4 md:right-8 text-white hover:text-gold transition-colors z-50 p-2" onClick={goToNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;

