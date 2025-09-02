import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PromiseSection from './components/PromiseSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OfferSection from './components/OfferSection';
import PortfolioSection from './components/PortfolioSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <OfferSection />
      <PromiseSection />
      <PortfolioSection/ >
      <ExperienceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;