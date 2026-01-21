import Hero from '@/components/Hero';
import CredibilityRow from '@/components/CredibilityRow';
import HowIWork from '@/components/HowIWork';
import Offers from '@/components/Offers';
import SelectedWorks from '@/components/SelectedWorks';
import Pricing from '@/components/Pricing';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CurrentFocus from '@/components/CurrentFocus';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityRow />
      <HowIWork />
      <Offers />
      <SelectedWorks />
      <TestimonialsCarousel />
      <CurrentFocus />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}