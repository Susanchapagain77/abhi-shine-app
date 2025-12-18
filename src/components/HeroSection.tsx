import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || "http://localhost:8081/";
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || "http://localhost:8082/";

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Team collaboration and business growth"
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-primary/55 to-primary/25" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 shadow-[0_12px_35px_-20px_rgba(16,24,64,0.6)] backdrop-blur-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-inner">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span>Crafted for ambitious teams & learners</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
            Empowering People. Transforming Businesses.
          </h1>
          
          <p className="text-lg leading-8 text-white/85 mb-8">
            At Abhidh Group, we bring together education, innovation, and technology to prepare individuals for brighter careers and help businesses achieve sustainable growth in today&apos;s competitive digital world.
          </p>
          
          <p className="text-base leading-7 text-white/75 mb-10">
            Through <strong className="text-white/95">Abhidh Academy</strong>, we deliver high-impact training across leadership, communication, digital marketing, IT, and more. Through <strong className="text-white/95">Abhidh Creative</strong>, we build digital strategies, products, and brands that help organizations stand out and scale with confidence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="group rounded-full bg-primary px-8 font-semibold text-white shadow-[0_18px_40px_-22px_rgba(33,65,165,0.65)] hover:bg-primary/90"
              onClick={() => (window.location.href = ACADEMY_URL)}
            >
              Explore Abhidh Academy
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/15 hover:text-white hover:border-white/60"
              onClick={() => (window.location.href = CREATIVE_URL)}
            >
              Explore Abhidh Creative
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
