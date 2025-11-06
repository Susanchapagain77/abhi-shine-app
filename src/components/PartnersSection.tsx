const PartnersSection = () => {
  const partners = [
    { type: "Education Partner", abbr: "EP" },
    { type: "Technology Partner", abbr: "TP" },
    { type: "Corporate Partner", abbr: "CP" },
    { type: "Industry Partner", abbr: "IP" },
    { type: "Global Partner", abbr: "GP" },
    { type: "Strategic Partner", abbr: "SP" },
  ];

  const stats = [
    { value: "60+", label: "Active Partners" },
    { value: "30+", label: "Educational Institutions" },
    { value: "40+", label: "Corporate Partners" },
    { value: "7+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Our Trusted Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building stronger communities through strategic partnerships with leading organizations, 
            educational institutions, and innovative companies across Nepal and the region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl font-bold text-primary mb-3">{partner.abbr}</div>
              <p className="text-sm text-muted-foreground">{partner.type}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
