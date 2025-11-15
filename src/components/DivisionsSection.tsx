import { Button } from "@/components/ui/button";
import academyHero from "@/assets/academy-hero.jpg";
import creativeHero from "@/assets/creative-hero.jpg";

const DivisionsSection = () => {
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || "http://localhost:8081/";
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || "http://localhost:8082/";

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-10 right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl opacity-80" />
      <div className="absolute bottom-10 left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl opacity-70" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            About Abhidh Group
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            More Than Just a Company
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground/90 leading-relaxed">
            <p>
              <strong className="text-foreground">Abhidh Group</strong> is a vision to empower the next generation of learners and entrepreneurs. Our two specialized ventures, <strong className="text-foreground">Abhidh Academy</strong> and <strong className="text-foreground">Abhidh Creative</strong>, work together to close the gap between knowledge and opportunity, and between businesses and a strong digital presence.
            </p>
            <p>
              When people gain the right skills and organizations have the right tools, both can thrive. That belief drives every program and project we deliver—creating value, measurable impact, and sustainable growth.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full border-white/20 bg-white/10 text-primary hover:bg-white/20 backdrop-blur"
            onClick={() => (window.location.href = "/about")}
          >
            Learn More About Us
          </Button>
        </div>

        <div className="text-center mb-20 space-y-4">
          <h3 className="text-3xl lg:text-[2.25rem] font-bold text-foreground">
            Our Companies
          </h3>
          <p className="text-lg text-muted-foreground/90 max-w-3xl mx-auto">
            Two focused divisions dedicated to driving growth, learning, and innovation across industries.
          </p>
        </div>

        <div className="space-y-24">
          {/* Abhidh Academy */}
          <div id="academy" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={academyHero}
                alt="Abhidh Academy - Professional Training and Education"
                className="rounded-3xl shadow-[0_45px_80px_-40px_rgba(18,40,90,0.55)] w-full h-[500px] object-cover border border-white/10"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 bg-card/60 backdrop-blur-xl rounded-3xl border border-white/10 p-10 shadow-[0_35px_70px_-40px_rgba(12,24,64,0.6)]">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Abhidh Academy</h3>
              <p className="text-lg text-muted-foreground/85 leading-relaxed">
                At Abhidh Academy, we create learning experiences that are practical, interactive, and designed for real-world success. Our trainings cover soft skills like leadership, communication, time management, and personality development — along with technical and professional courses in digital marketing, IT, AI, Excel, accounting, and taxation. Every session is carefully crafted to not just teach, but transform.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-foreground/90">
                  <div className="mt-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <p className="text-sm md:text-base">
                    <strong className="font-medium">Soft Skills Training:</strong> Success depends on how well we lead, communicate, and collaborate. Our programs build leadership qualities, improve communication, and strengthen workplace relationships for students and professionals alike.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-foreground/90">
                  <div className="mt-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <p className="text-sm md:text-base">
                    <strong className="font-medium">Technical & Career Training:</strong> We provide hands-on learning in digital marketing, artificial intelligence, prompt engineering, cybersecurity, Microsoft Excel, accounting, taxation, and more — equipping learners with job-ready skills.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-foreground/90">
                  <div className="mt-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <p className="text-sm md:text-base">
                    <strong className="font-medium">Corporate Training Programs:</strong> We partner with schools, colleges, and companies to deliver customized workshops — from leadership to team building — helping institutions improve performance, strengthen culture, and boost productivity.
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-4 rounded-full px-8 shadow-[0_18px_40px_-20px_rgba(20,40,90,0.6)] hover:-translate-y-0.5 transition-transform"
                onClick={() => (window.location.href = ACADEMY_URL)}
              >
                Explore Abhidh Academy
              </Button>
            </div>
          </div>

          {/* Abhidh Creative */}
          <div id="creative" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 bg-card/60 backdrop-blur-xl rounded-3xl border border-white/10 p-10 shadow-[0_35px_70px_-40px_rgba(12,24,64,0.6)]">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Abhidh Creative</h3>
              <p className="text-lg text-muted-foreground/85 leading-relaxed">
                In today&apos;s competitive world, visibility defines success. Abhidh Creative provides complete digital solutions to help businesses grow smarter. From social media management and SEO to Google Ads, web development, and mobile app creation, we help brands stand out, connect with their audience, and achieve measurable results. We don&apos;t just market businesses — we build their digital identity.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-foreground/90">
                  <div className="mt-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <p className="text-sm md:text-base">
                    <strong className="font-medium">Digital Marketing:</strong> End-to-end strategies that get you discovered, attract customers, and increase sales — from social media storytelling to SEO, Google Ads, and data-driven reporting.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-foreground/90">
                  <div className="mt-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <p className="text-sm md:text-base">
                    <strong className="font-medium">IT & Development Services:</strong> Website design and development, mobile apps, e-commerce platforms, and custom software with user-friendly design, robust functionality, and long-term support.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-foreground/90">
                  <div className="mt-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <p className="text-sm md:text-base">
                    <strong className="font-medium">Creative Solutions:</strong> Branding, graphic design, multimedia production, and campaign strategy that craft unique, professional, and memorable identities.
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-4 rounded-full px-8 shadow-[0_18px_40px_-20px_rgba(20,40,90,0.6)] hover:-translate-y-0.5 transition-transform"
                onClick={() => (window.location.href = CREATIVE_URL)}
              >
                Explore Abhidh Creative
              </Button>
            </div>
            <div>
              <img
                src={creativeHero}
                alt="Abhidh Creative - Digital Marketing and Development Services"
                className="rounded-3xl shadow-[0_45px_80px_-40px_rgba(18,40,90,0.55)] w-full h-[500px] object-cover border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
