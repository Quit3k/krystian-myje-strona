import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const phoneNumber = "724 860 989";
  const telLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // ZMIANA: Zmniejszony offset dla mniejszego marginesu
      const offset = 50; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth >= 768) {
      e.preventDefault();
      setIsPhoneVisible(!isPhoneVisible);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="font-sans text-2xl text-gray-900 font-bold">
              Krystian<span style={{ color: 'rgb(212, 175, 55)' }}>Myje</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-sans text-gray-800 hover:text-gold transition-colors duration-300 text-base"
            >
              Strona Główna
            </button>
            <button
              onClick={() => scrollToSection('offer')}
              className="font-sans text-gray-800 hover:text-gold transition-colors duration-300 text-base"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-sans text-gray-800 hover:text-gold transition-colors duration-300 text-base"
            >
              Opinie
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-sans text-gray-800 hover:text-gold transition-colors duration-300 text-base"
            >
              Pytania
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-sans text-gray-800 hover:text-gold transition-colors duration-300 text-base"
            >
              Kontakt
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={telLink}
              onClick={handleCallClick}
              className="hidden md:flex bg-gold hover:bg-gold-light text-white font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300 items-center justify-center space-x-2 hover:shadow-lg"
              style={{ minWidth: '175px' }}
            >
              <Phone className="w-4 h-4" />
              <span>{isPhoneVisible ? phoneNumber : 'Zadzwoń'}</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800 hover:text-gold transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-center px-3 py-2 font-sans text-gray-800 hover:text-gold hover:bg-gray-50 rounded-md transition-colors duration-300">
                Strona Główna
              </button>
              <button onClick={() => scrollToSection('offer')} className="block w-full text-center px-3 py-2 font-sans text-gray-800 hover:text-gold hover:bg-gray-50 rounded-md transition-colors duration-300">
                Oferta
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-center px-3 py-2 font-sans text-gray-800 hover:text-gold hover:bg-gray-50 rounded-md transition-colors duration-300">
                Opinie
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-center px-3 py-2 font-sans text-gray-800 hover:text-gold hover:bg-gray-50 rounded-md transition-colors duration-300">
                Pytania
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-center px-3 py-2 font-sans text-gray-800 hover:text-gold hover:bg-gray-50 rounded-md transition-colors duration-300">
                Kontakt
              </button>
              <div className="border-t border-gray-100 my-2"></div>
              <a
                href={telLink}
                className="flex items-center justify-center space-x-2 w-full text-center px-3 py-3 font-sans font-semibold text-gold bg-gold/10 hover:bg-gold/20 rounded-md transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Zadzwoń: {phoneNumber}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

