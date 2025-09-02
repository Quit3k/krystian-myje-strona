import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  // Logika do podświetlania aktualnego dnia tygodnia
  const dayIndex = new Date().getDay(); // Niedziela = 0, Poniedziałek = 1, etc.
  
  const schedule = [
    { day: "Poniedziałek", hours: "08:00 - 18:00" },
    { day: "Wtorek", hours: "08:00 - 18:00" },
    { day: "Środa", hours: "08:00 - 18:00" },
    { day: "Czwartek", hours: "08:00 - 18:00" },
    { day: "Piątek", hours: "08:00 - 18:00" },
    { day: "Sobota", hours: "09:00 - 14:00" },
    { day: "Niedziela", hours: "Nieczynne" },
  ];

  // Mapowanie getDay() na indeksy tablicy schedule
  const scheduleIndexMap = [6, 0, 1, 2, 3, 4, 5]; 
  const todayIndex = scheduleIndexMap[dayIndex];

  return (
    // ZMIANA: ID sekcji poprawione na 'contact'
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Skontaktuj się <span className="text-gold">ze mną</span>
          </h2>
          <p className="font-sans text-xl text-gray-600">
            Masz pytania lub chcesz umówić usługę? Jestem do Twojej dyspozycji.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Lewa kolumna: Dane kontaktowe i godziny */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
            <h3 className="font-sans text-2xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                <a href="tel:724860989" className="font-sans text-lg text-gray-700 hover:text-gold transition-colors">724 860 989</a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gold flex-shrink-0" />
                <a href="mailto:info@krystian-myje.pl" className="font-sans text-lg text-gray-700 hover:text-gold transition-colors">info@krystian-myje.pl</a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="font-sans text-lg text-gray-700">Rzeszów i okolice (do 30km)</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-auto">
              <h3 className="font-sans text-2xl font-bold text-gray-900 mb-4">
                Godziny kontaktu
              </h3>
              <ul className="space-y-2 font-sans">
                {schedule.map((item, index) => (
                  <li 
                    key={item.day} 
                    className={`flex justify-between items-center text-lg p-2 rounded-md ${index === todayIndex ? 'bg-gold/10 text-gold font-bold' : 'text-gray-700'}`}
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prawa kolumna: Formularz kontaktowy */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <h3 className="font-sans text-2xl font-bold text-gray-900 mb-6">Napisz wiadomość</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="font-sans text-gray-700 mb-2 block">Imię i Nazwisko</label>
                <input type="text" id="name" name="name" className="w-full p-3 font-sans border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="font-sans text-gray-700 mb-2 block">Adres e-mail</label>
                  <input type="email" id="email" name="email" className="w-full p-3 font-sans border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="font-sans text-gray-700 mb-2 block">Numer telefonu</label>
                  <input type="tel" id="phone" name="phone" className="w-full p-3 font-sans border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-sans text-gray-700 mb-2 block">Wiadomość</label>
                <textarea id="message" name="message" rows={7} className="w-full p-3 font-sans border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors"></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="consent" name="consent" className="h-5 w-5 mt-1 text-gold border-gray-300 rounded focus:ring-gold" />
                <label htmlFor="consent" className="ml-3 font-sans text-sm text-gray-600">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności.
                </label>
              </div>
              <div>
                <button type="submit" className="w-full bg-gold hover:bg-gold-light text-white font-sans font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                  Wyślij wiadomość
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

