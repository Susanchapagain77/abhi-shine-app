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
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Why Choose Abhidh Group?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four compelling reasons that make us your trusted partner in growth and transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8">
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground font-medium">Students Trained</p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground font-medium">Projects Delivered</p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
