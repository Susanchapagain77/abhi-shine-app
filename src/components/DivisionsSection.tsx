import { Button } from "@/components/ui/button";
import academyHero from "@/assets/academy-hero.jpg";
import creativeHero from "@/assets/creative-hero.jpg";

const DivisionsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Our Divisions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two specialized divisions working together to drive growth, learning, and innovation across industries.
          </p>
        </div>

        <div className="space-y-24">
          {/* Abhidh Academy */}
          <div id="academy" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={academyHero}
                alt="Abhidh Academy - Professional Training and Education"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">Abhidh Academy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Abhidh Academy, we create learning experiences that are practical, interactive, and 
                designed for real-world success. Our trainings cover soft skills like leadership, 
                communication, time management, and personality development – along with technical and 
                professional courses in digital marketing, IT, AI, Excel, accounting, and taxation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Soft Skills Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Technical & Career Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Corporate Training Solutions</span>
                </div>
              </div>
              <Button size="lg" className="mt-4">
                Explore Academy
              </Button>
            </div>
          </div>

          {/* Abhidh Creative */}
          <div id="creative" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">Abhidh Creative</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In today's competitive world, visibility defines success. Abhidh Creative provides 
                complete digital solutions to help businesses grow smarter — from social media management 
                and SEO to Google Ads, web development, and mobile app creation. We don't just market 
                businesses — we build their digital identity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Digital Marketing & SEO</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Web & Mobile Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Creative Design Solutions</span>
                </div>
              </div>
              <Button size="lg" className="mt-4">
                View Services
              </Button>
            </div>
            <div>
              <img
                src={creativeHero}
                alt="Abhidh Creative - Digital Marketing and Development Services"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
