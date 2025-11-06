import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DivisionsSection />
      <WhyChooseSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
