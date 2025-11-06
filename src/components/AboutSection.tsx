import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      title: "Mission-Driven",
      description: "We exist to bridge the gap between theoretical knowledge and practical application.",
      icon: "🎯",
    },
    {
      title: "People-Centered",
      description: "Every solution we create is designed with human potential and growth at its core.",
      icon: "👥",
    },
    {
      title: "Excellence First",
      description: "We maintain the highest standards in both education and digital innovation.",
      icon: "⭐",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">About ABHIDH Group</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a fast-changing world where industries evolve every day, individuals and organizations 
            must keep upgrading themselves to stay ahead. <strong>Abhidh Group</strong> exists to make 
            this transformation possible.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through <strong>Abhidh Academy</strong>, we deliver high-impact training in leadership, 
            communication, digital marketing, IT, and more to equip students, professionals, and 
            organizations with the right skills for the future. Through <strong>Abhidh Creative</strong>, 
            we offer businesses advanced digital marketing, branding, and IT development services that 
            boost visibility, attract customers, and accelerate growth. Together, we make people stronger 
            and businesses smarter.
          </p>
          <Button size="lg" variant="outline" className="mt-4">
            Learn Our Story
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
