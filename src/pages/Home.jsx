import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesGrid from '../components/home/ServicesGrid';
import PortfolioSection from '../components/home/PortfolioSection';
import ClientsSection from '../components/home/ClientsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <PortfolioSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
}
