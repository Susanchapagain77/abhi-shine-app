import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || 'http://localhost:8081/';
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || 'http://localhost:8082/';
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Empowering People & Businesses Through
              <span className="text-primary"> Skills</span> and
              <span className="text-primary"> Digital Solutions</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              At Abhidh Group, we bring together education, innovation, and technology to prepare 
              individuals for brighter careers and help businesses achieve sustainable growth in 
              today's competitive digital world.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => window.location.href = ACADEMY_URL}>
                Explore Academy
              </Button>
              <Button size="lg" variant="secondary" onClick={() => window.location.href = CREATIVE_URL}>
                Creative Services
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative space-y-6">
              <div className="bg-card p-8 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">500+</h3>
                    <p className="text-muted-foreground text-sm">Students Trained</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow ml-12">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">100+</h3>
                    <p className="text-muted-foreground text-sm">Projects Delivered</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">95%</h3>
                    <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
