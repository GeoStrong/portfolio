import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ScreenPreviewSection from './components/ScreenPreviewSection';
import ReviewsSection from './components/ReviewsSection';
import CTASection from './components/CTASection';

const AIAppLanding: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenPreviewSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

export default AIAppLanding;
