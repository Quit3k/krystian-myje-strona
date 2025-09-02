import React from 'react';

// Dane opinii pozostają bez zmian
const testimonialsData = [
  {
    name: 'Anna Kowalska',
    source: 'Zweryfikowana opinia Google',
    quote: 'Pełen profesjonalizm i świetny kontakt. Grób moich rodziców, wykonany z lastryko, po czyszczeniu ciśnieniowym wygląda jak nowy. Polecam z całego serca!',
    rating: 5,
  },
  {
    name: 'Tomasz Nowak',
    source: 'Zweryfikowana opinia Google',
    quote: 'Myślałem, że plamy oleju i mech na podjeździe zostaną na zawsze. Krystian dokonał cudu! Kostka brukowa odzyskała swój dawny kolor. Usługa warta każdej złotówki.',
    rating: 5,
  },
  {
    name: 'Magdalena Wiśniewska',
    source: 'Zweryfikowana opinia Google',
    quote: 'Bardzo rzetelna i punktualna osoba. Wszystko wykonane zgodnie z umową, a efekt końcowy przerósł moje oczekiwania. Na pewno jeszcze skorzystam z usług.',
    rating: 5,
  },
  {
    name: 'Piotr Zieliński',
    source: 'Zweryfikowana opinia Google',
    quote: 'Szybka i sprawna realizacja. Dzięki dokumentacji zdjęciowej mogłem na bieżąco śledzić postępy prac przy grobie dziadków. Doskonała usługa dla osób na odległość.',
    rating: 5,
  },
  {
    name: 'Anna Kowalska',
    source: 'Zweryfikowana opinia Google',
    quote: 'Pełen profesjonalizm i świetny kontakt. Grób moich rodziców, wykonany z lastryko, po czyszczeniu ciśnieniowym wygląda jak nowy. Polecam z całego serca!',
    rating: 5,
  },
  {
    name: 'Tomasz Nowak',
    source: 'Zweryfikowana opinia Google',
    quote: 'Myślałem, że plamy oleju i mech na podjeździe zostaną na zawsze. Krystian dokonał cudu! Kostka brukowa odzyskała swój dawny kolor. Usługa warta każdej złotówki.',
    rating: 5,
  },
  {
    name: 'Magdalena Wiśniewska',
    source: 'Zweryfikowana opinia Google',
    quote: 'Bardzo rzetelna i punktualna osoba. Wszystko wykonane zgodnie z umową, a efekt końcowy przerósł moje oczekiwania. Na pewno jeszcze skorzystam z usług.',
    rating: 5,
  },
  {
    name: 'Piotr Zieliński',
    source: 'Zweryfikowana opinia Google',
    quote: 'Szybka i sprawna realizacja. Dzięki dokumentacji zdjęciowej mogłem na bieżąco śledzić postępy prac przy grobie dziadków. Doskonała usługa dla osób na odległość.',
    rating: 5,
  },
];

// Komponent do renderowania gwiazdek
const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'text-gold' : 'text-gray-300'}>★</span>
    );
  }
  return <div className="flex text-xl">{stars}</div>;
};

// SVG ikony Google jako komponent
const GoogleIcon = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.425,44,30.038,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);


const TestimonialsSection = () => {
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-22rem * 4)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
      <section id="testimonials" className="py-24 bg-white font-sans">
        <div className="text-center mb-16 px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Co mówią moi <span className="text-gold">klienci?</span>
          </h2>
        </div>
        <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex w-[calc(22rem*8)] animate-scroll">
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="w-80 mx-4 flex-shrink-0 bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <GoogleIcon />
                  <div className="ml-4 flex flex-col">
                    <span className="font-semibold text-gray-900">{testimonial.name}</span>
                    <span className="text-sm text-gray-500">{testimonial.source}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="italic text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
