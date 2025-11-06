import { Sparkles, Users, Target, TrendingUp } from "lucide-react";

const AboutHero = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Success Stories" },
    { icon: TrendingUp, value: "4+", label: "Years Experience" },
    { icon: Target, value: "2", label: "Divisions" },
    { icon: Sparkles, value: "100%", label: "Commitment" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-[15%] w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-[20%] w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="py-20 lg:py-32 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">About Us</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Who We{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Are
                </span>
                <div className="absolute inset-0 bg-primary/20 blur-2xl" />
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              At <span className="font-semibold text-foreground">Abhidh Group</span>, we believe that growth is not just about achieving numbers —{' '}
              <span className="text-foreground font-medium">it is about creating value that lasts.</span>
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 lg:p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative line */}
          <div className="mt-20 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default AboutHero;
