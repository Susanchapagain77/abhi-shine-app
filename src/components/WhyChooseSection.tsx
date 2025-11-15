const WhyChooseSection = () => {
  const reasons = [
    {
      title: "One Group, Dual Impact",
      description: "Professional training for individuals and digital transformation for businesses.",
      icon: "🎓",
    },
    {
      title: "Trusted Expertise",
      description: "Certified trainers, skilled developers, and experienced marketing strategists.",
      icon: "✅",
    },
    {
      title: "Global & Local Approach",
      description: "We serve Nepal's schools, colleges, and companies, while maintaining global standards of quality.",
      icon: "🌍",
    },
    {
      title: "Measurable Growth",
      description: "Every program and project is designed to create real, trackable results.",
      icon: "📊",
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/25 to-background" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto relative">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Why it works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/70 to-foreground/50 bg-clip-text text-transparent">
            Why Choose Abhidh Group?
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
            Four compelling reasons that make us your trusted partner in growth and transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-8 text-center backdrop-blur-xl shadow-[0_25px_50px_-30px_rgba(16,30,70,0.75)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_25px_60px_-25px_rgba(18,40,90,0.7)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative text-5xl mb-4">{reason.icon}</div>
              <h3 className="relative text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="relative text-muted-foreground/85">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="rounded-2xl border border-white/10 bg-card/40 p-8 text-center backdrop-blur-lg shadow-inner shadow-primary/10">
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground/85 font-medium">Students Trained</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/40 p-8 text-center backdrop-blur-lg shadow-inner shadow-primary/10">
            <div className="text-5xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground/85 font-medium">Projects Delivered</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card/40 p-8 text-center backdrop-blur-lg shadow-inner shadow-primary/10">
            <div className="text-5xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground/85 font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
