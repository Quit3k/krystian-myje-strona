import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Phone } from 'lucide-react';
import Lightbox from './Lightbox';

interface CarCardProps {
  car: {
    id: number;
    title: string;
    description: string;
    features: { icon: string; text: string }[];
    images: string[];
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };
  
  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  }

  return (
    <>
      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-200 hover:border-gold/30">
        <div className="lg:flex">
          
          {/* ZMIANY: Zmniejszone marginesy i paddingi dla niższej karty */}
          <div className="lg:w-[35%] p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-sans text-3xl md:text-4xl text-gray-900 mb-4 font-bold">{car.title}</h3>
              <p className="font-sans text-gray-600 mb-4 leading-relaxed text-lg">{car.description}</p>
              
              <div className="space-y-3 mb-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-gold text-2xl">{feature.icon}</span>
                    <span className="font-sans text-gray-700 text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-3 rounded-full transition-all duration-300 text-center flex items-center justify-center space-x-2 group hover:shadow-lg mt-4"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Zarezerwuj Ten Samochód</span>
            </a>
          </div>
          
          <div className="lg:w-[65%] relative group">
            <div className="relative w-full h-full overflow-hidden">
              {/* ZMIANA: Zmniejszona minimalna wysokość zdjęcia */}
              <img
                src={car.images[currentImageIndex]}
                alt={`${car.title} - Zdjęcie ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[240px]"
              />
              
              {car.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gold rounded-full p-3 transition-all duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gold rounded-full p-3 transition-all duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              <button
                onClick={openLightbox}
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gold rounded-full p-3 transition-all duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100 shadow-lg"
              >
                <Expand className="w-5 h-5" />
              </button>
              
              {car.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {car.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-gold' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Lightbox
        images={car.images}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        initialIndex={currentImageIndex}
      />
    </>
  );
};

export default CarCard;