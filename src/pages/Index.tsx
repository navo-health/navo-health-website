
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Journey from '@/components/Journey';
import Technology from '@/components/Technology';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Journey />
      <Technology />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
