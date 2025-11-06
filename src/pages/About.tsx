import Navigation from "@/components/Navigation";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
