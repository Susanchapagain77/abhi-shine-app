const milestones = [
  { year: "2020", title: "Company Founded", desc: "Started with a vision to bridge education and business growth." },
  { year: "2021", title: "Academy Launch", desc: "Introduced comprehensive training programs." },
  { year: "2022", title: "Creative Division", desc: "Expanded into digital marketing and development services." },
  { year: "2024", title: "500+ Success Stories", desc: "Reached significant milestones in student and client satisfaction." },
];

const Timeline = () => {
  return (
    <div className="w-full">
      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block relative py-12">
        {/* Connection line */}
        <div className="absolute left-0 right-0 top-20 h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 rounded-full" />

        <div className="relative grid grid-cols-4 gap-8">
          {milestones.map((m, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Year badge */}
              <div className="group relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-background">
                  {m.year}
                </div>
              </div>
              
              {/* Content */}
              <div className="mt-8 text-center">
                <h5 className="font-bold text-lg mb-2">{m.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="lg:hidden relative space-y-8">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 rounded-full" />
        
        {milestones.map((m, idx) => (
          <div 
            key={idx} 
            className="relative flex gap-6 animate-fade-in"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            {/* Year badge */}
            <div className="flex-shrink-0 relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-background">
                {m.year.slice(-2)}
              </div>
            </div>
            
            {/* Content card */}
            <div className="flex-1 pb-4">
              <div className="p-5 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="text-xs font-semibold text-primary mb-2">{m.year}</div>
                <h5 className="font-bold text-base mb-2">{m.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
