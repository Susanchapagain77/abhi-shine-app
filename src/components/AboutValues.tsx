import { ShieldCheck, Star, Zap, Target } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We aim for the highest standards in everything we deliver — from training sessions to marketing strategies.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace creativity and technology to craft smarter, more effective solutions.",
      gradient: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "We believe in transparency, honesty, and accountability in all our partnerships.",
      gradient: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Every initiative we take is designed to create meaningful outcomes for individuals and organizations.",
      gradient: "from-green-500/20 to-green-500/5"
    }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do at ABHIDH Group
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-6 lg:p-8 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
