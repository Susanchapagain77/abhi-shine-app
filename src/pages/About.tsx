import Navigation from "@/components/Navigation";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutDivisions from "@/components/AboutDivisions";
import AboutValues from "@/components/AboutValues";
import AboutJourney from "@/components/AboutJourney";
import AboutContact from "@/components/AboutContact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <main>
        <AboutStory />
        <AboutDivisions />
        <AboutValues />
        <AboutJourney />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
