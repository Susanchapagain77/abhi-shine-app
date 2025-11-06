const milestones = [
  { year: "2020", title: "Company Founded", desc: "Started with a vision to bridge education and business growth." },
  { year: "2021", title: "Academy Launch", desc: "Introduced comprehensive training programs." },
  { year: "2022", title: "Creative Division", desc: "Expanded into digital marketing and development services." },
  { year: "2024", title: "500+ Success Stories", desc: "Reached significant milestones in student and client satisfaction." },
];

const Timeline = () => {
  return (
    <div className="w-full">
      {/* Desktop: horizontal timeline with connecting line */}
      <div className="hidden lg:block relative py-8">
        <div className="absolute left-10 right-10 top-12 h-0.5 bg-border/40" />

        <div className="relative flex items-start justify-between">
          {milestones.map((m, idx) => (
            <div key={idx} className="flex-1 text-center px-4">
              <div className="mx-auto w-20 h-20 bg-background rounded-full flex items-center justify-center text-lg font-bold border border-border shadow-sm">
                {m.year}
              </div>
              <div className="mt-4">
                <h5 className="font-semibold text-base">{m.title}</h5>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked timeline cards */}
      <div className="lg:hidden space-y-4">
        {milestones.map((m, idx) => (
          <div key={idx} className="p-4 bg-card rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center font-bold border border-border">{m.year}</div>
              <div>
                <div className="font-semibold">{m.title}</div>
                <div className="text-sm text-muted-foreground">{m.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
