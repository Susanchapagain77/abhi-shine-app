const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block animate-fade-in">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">About Us</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Who We Are
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            At <span className="font-semibold text-foreground">Abhidh Group</span>, we believe that growth is not just about achieving numbers — it is about creating value that lasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
