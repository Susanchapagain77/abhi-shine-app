import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <header className="relative overflow-hidden py-14">
      {/* smaller decorative SVG (keeps visual interest but avoids large layout gaps) */}
      <svg
        className="absolute -top-12 -left-12 opacity-8 w-64 h-64 text-primary"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#g)" />
      </svg>

      <div className="container mx-auto relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Who we are</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            We build skills and digital experiences that last
          </h1>

          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            Abhidh Group blends practical education with modern digital solutions to empower people and businesses. We focus on measurable impact and human-centred learning.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-yellow-400 text-black rounded-full px-8 py-3 shadow-md hover:shadow-lg">Explore Academy</Button>
            <Button size="sm" variant="outline" className="rounded-full">Visit Creative</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
