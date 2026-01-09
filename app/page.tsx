import Hero from '@/components/Hero';
import CredibilityRow from '@/components/CredibilityRow';
import Offers from '@/components/Offers';
import SelectedWorks from '@/components/SelectedWorks';
import WhoIHelp from '@/components/WhoIHelp';
import Pricing from '@/components/Pricing';
import Mentorship from '@/components/Mentorship';
import FAQ from '@/components/FAQ';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityRow />
      <Offers />
      <SelectedWorks />
      <WhoIHelp />
      <Pricing />
      <Mentorship />
      <TestimonialsCarousel />
      <FAQ />
      <CTA />
    </>
  );
}