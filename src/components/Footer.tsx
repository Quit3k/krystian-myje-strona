import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Kolumna 1 - Logo i opis */}
          <div className="space-y-4 text-center md:text-left">
            {/* ZMIANA: Logo */}
            <h3 className="font-sans text-2xl font-bold">
              <span className="text-white">Krystian</span>
              <span style={{ color: 'rgb(212, 175, 55)' }}>Myje</span>
            </h3>
            {/* ZMIANA: Opisy */}
            <p className="font-sans text-lg text-gold opacity-80 italic">
              Czystość, która robi wrażenie.
            </p>
            <p className="font-sans text-sm text-white opacity-60 leading-relaxed">
              Przywracam blask nagrobkom i kostce brukowej, dbając o każdy detal. Twoje zadowolenie jest moim priorytetem.
            </p>
          </div>
          
          {/* Kolumna 2 - Szybkie Linki */}
          <div className="space-y-4 text-center">
            <h4 className="font-sans text-xl font-semibold text-white">Nawigacja</h4>
            {/* ZMIANA: Linki nawigacji */}
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block w-full font-sans text-white opacity-80 hover:text-gold hover:opacity-100 transition-all duration-300">
                Strona Główna
              </button>
              <button onClick={() => scrollToSection('offer')} className="block w-full font-sans text-white opacity-80 hover:text-gold hover:opacity-100 transition-all duration-300">
                Oferta
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full font-sans text-white opacity-80 hover:text-gold hover:opacity-100 transition-all duration-300">
                Opinie
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full font-sans text-white opacity-80 hover:text-gold hover:opacity-100 transition-all duration-300">
                Pytania
              </button>
            </nav>
          </div>
          
          {/* Kolumna 3 - Kontakt */}
          <div className="space-y-4 text-center">
            <h4 className="font-sans text-xl font-semibold text-white">Informacje Kontaktowe</h4>
            {/* ZMIANA: Dane kontaktowe */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <p className="font-sans text-sm text-white opacity-80">
                  Rzeszów i okolice
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:724860989" className="font-sans text-sm text-white opacity-80 hover:text-gold transition-colors duration-300">
                  724 860 989
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@krystian-myje.pl" className="font-sans text-sm text-white opacity-80 hover:text-gold transition-colors duration-300">
                  info@krystian-myje.pl
                </a>
              </div>
            </div>
          </div>
          
          {/* Kolumna 4 - Social Media */}
          <div className="space-y-4 text-center md:text-right">
            <h4 className="font-sans text-xl font-semibold text-white">Śledź Mnie</h4>
            {/* ZMIANA: Linki social media */}
            <div className="flex space-x-4 justify-center md:justify-end">
              <a 
                href="https://www.instagram.com/krystian_myje/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100090143597793" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <p className="font-sans text-sm text-white opacity-60 leading-relaxed">
              Zobacz moje realizacje <br /> i bądź na bieżąco z ofertą.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* ZMIANA: Copyright */}
          <p className="font-sans text-sm text-white opacity-60 text-center md:text-left">
            © 2025 KrystianMyje. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="font-sans text-sm text-white opacity-60 hover:text-gold hover:opacity-100 transition-all duration-300">
              Polityka Prywatności
            </a>
            <a href="#" className="font-sans text-sm text-white opacity-60 hover:text-gold hover:opacity-100 transition-all duration-300">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

