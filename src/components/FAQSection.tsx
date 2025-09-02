import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ZMIANA: Nowe pytania i odpowiedzi
  const faqs = [
    {
      question: "Na jakim terenie świadczone są usługi?",
      answer: "Działam głównie na terenie Rzeszowa oraz w promieniu około 30 km od miasta. Jeśli interesuje Cię usługa w dalszej lokalizacji na Podkarpaciu, proszę o kontakt – chętnie omówię warunki i możliwości dojazdu."
    },
    {
      question: "Jak wygląda proces wyceny? Czy jest darmowa?",
      answer: "Tak, wycena jest zawsze darmowa i niezobowiązująca. Do każdego zlecenia podchodzę indywidualnie. Najlepiej zadzwonić lub wysłać zdjęcie, abym mógł precyzyjnie ocenić zakres prac i przedstawić dokładny kosztorys."
    },
    {
      question: "Czy muszę zapewnić dostęp do prądu na miejscu?",
      answer: "Nie, nie ma takiej potrzeby. Dysponuję profesjonalną, mobilną myjką ciśnieniową z własnym silnikiem spalinowym, co oznacza, że nie zużywam prądu klienta. Jedyne, czego potrzebuję, to dostęp do źródła wody."
    },
    {
      question: "Czym różni się czyszczenie nagrobka z granitu od tego z lastryko?",
      answer: "Do każdego materiału podchodzę inaczej. Gładkie kamienie, jak granit, czyszczę delikatniejszymi metodami. Z kolei chropowate nagrobki z lastryko najskuteczniej myję ciśnieniowo, co przywraca im wygląd niemal jak nowe."
    },
    {
      question: "Czy otrzymam zdjęcia z wykonanej pracy?",
      answer: "Oczywiście. W cenie każdej usługi zawarta jest dokumentacja zdjęciowa 'przed i po'. Dzięki temu klienci, szczególnie ci, którzy zlecają usługę na odległość, mogą dokładnie zobaczyć efekt mojej pracy i mieć pewność dobrze wykonanego zadania."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* ZMIANA: Tytuł i opis sekcji */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-5xl md:text-6xl text-gray-900 mb-6 font-bold">
            Częste Pytania, <span className="text-gold">Jasne Odpowiedzi</span>
          </h2>
          <p className="font-sans text-xl text-gray-600">
            Wszystko, co musisz wiedzieć o moich usługach.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="font-sans text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-gold transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-gold transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-6 pb-6">
                  <p className="font-sans text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
