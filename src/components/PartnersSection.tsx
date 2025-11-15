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
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl opacity-70" />

      <div className="container mx-auto relative">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Partnerships that elevate
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/70 to-foreground/50 bg-clip-text text-transparent">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-muted-foreground/85 max-w-3xl mx-auto">
            Building stronger communities through strategic partnerships with leading organizations, 
            educational institutions, and innovative companies across Nepal and the region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-card/50 p-8 text-center backdrop-blur-lg shadow-[0_25px_55px_-30px_rgba(16,28,70,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_25px_65px_-20px_rgba(20,40,90,0.65)]"
            >
              <div className="text-4xl font-bold text-primary mb-3">{partner.abbr}</div>
              <p className="text-sm text-muted-foreground/80">{partner.type}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-card/40 p-6 text-center backdrop-blur-md shadow-inner shadow-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
