import { Button } from "@/components/ui/button";
import { GraduationCap, Rocket } from "lucide-react";

const HeroSection = () => {
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || "http://localhost:8081/";
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || "http://localhost:8082/";

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background via-[#f7f9ff] to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 right-[-200px] h-[460px] w-[520px] rotate-12 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-[140px]" />
        <div className="absolute top-48 left-[-240px] h-[320px] w-[380px] -rotate-6 rounded-full bg-gradient-to-br from-accent/25 via-accent/10 to-transparent blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(35,69,180,0.07)_0%,rgba(255,255,255,0)_45%)]" />
      </div>

      <div className="container mx-auto px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-8 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Crafted for ambitious teams & learners
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[3.4rem]">
                Empowering People. Transforming Businesses.
              </h1>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                At Abhidh Group, we bring together education, innovation, and technology to prepare individuals for brighter careers and help businesses achieve sustainable growth in today&apos;s competitive digital world.
              </p>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Through Abhidh Academy, we deliver high-impact training across leadership, communication, digital marketing, IT, and more. Through Abhidh Creative, we build digital strategies, products, and brands that help organizations stand out and scale with confidence.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_40px_-22px_rgba(33,65,165,0.65)] hover:bg-primary/90"
                onClick={() => (window.location.href = ACADEMY_URL)}
              >
                Explore Abhidh Academy
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-slate-300 px-8 font-semibold uppercase tracking-[0.24em] text-slate-700 transition-colors duration-200 hover:border-primary hover:text-primary hover:bg-white"
                onClick={() => (window.location.href = CREATIVE_URL)}
              >
                Explore Abhidh Creative
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[28px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-[80px]" />
            <div className="rounded-[28px] border border-slate-200 bg-white/85 p-7 shadow-[0_28px_60px_-30px_rgba(17,32,90,0.35)] backdrop-blur">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">Abhidh Academy</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Immersive training journeys that combine practical workshops, mentorship, and curriculum design to help individuals and teams stay ahead.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />Leadership, communication, and professional readiness programs.</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />Technical courses covering digital marketing, AI, and analytics.</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />Custom workshops for schools, colleges, and corporate partners.</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white/85 p-7 shadow-[0_28px_60px_-30px_rgba(17,32,90,0.35)] backdrop-blur">
              <div className="flex items-center gap-3 text-primary">
                <Rocket className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">Abhidh Creative</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                A digital and IT partner delivering strategy, design, and engineering so brands can build credibility, reach the right audience, and grow sustainably.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />Growth-focused marketing across social, search, and performance channels.</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />Websites, mobile apps, and platforms built for scalability and usability.</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />Brand identity systems, storytelling, and creative production.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
