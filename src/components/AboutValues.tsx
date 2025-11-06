import { Users, Star, Zap, Target } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Users,
      title: "People First",
      description: "Every decision we make prioritizes the growth and success of the people we serve.",
      gradient: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We maintain the highest standards in both our educational programs and business solutions.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our methods to stay ahead of industry trends and needs.",
      gradient: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: Target,
      title: "Impact",
      description: "We measure our success by the positive transformation we create in lives and businesses.",
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
