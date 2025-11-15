import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Digital Marketing",
    description:
      "End-to-end strategies that help businesses get discovered, attract the right audience, and convert interest into measurable growth across social, search, and performance channels.",
    highlights: [
      "Campaign strategy, content, and community management",
      "SEO, SEM, and analytics tuned for long-term visibility",
      "Reporting that links marketing spend to business outcomes",
    ],
  },
  {
    title: "IT & Development Services",
    description:
      "Websites, mobile apps, e-commerce platforms, and custom software engineered for usability, scalability, and long-term support.",
    highlights: [
      "Experience-led product design and UX audits",
      "Robust engineering practices for secure deployments",
      "Continuous optimization and maintenance partnerships",
    ],
  },
  {
    title: "Creative Solutions",
    description:
      "Brand storytelling, identity systems, and multimedia production that make businesses memorable across every touchpoint.",
    highlights: [
      "Brand positioning, visual identity, and guidelines",
      "Campaign concepts, copywriting, and asset production",
      "Video, photo, and motion graphics tailored to platforms",
    ],
  },
];

const Creative = () => {
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || "http://localhost:8082/";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="space-y-24 pt-28">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-[#f0f5ff] to-background" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-[-220px] h-[360px] w-[420px] -rotate-12 rounded-full bg-primary/25 blur-[120px]" />
            <div className="absolute top-28 right-[-200px] h-[420px] w-[500px] rotate-6 rounded-full bg-accent/25 blur-[130px]" />
          </div>
          <div className="container relative z-10 mx-auto px-6 py-24">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Abhidh Creative
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Creativity meets strategy. Innovation meets technology.
              </h1>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Abhidh Creative helps businesses stand out in crowded markets and grow with intention. We combine storytelling, design, and engineering to build a digital presence that stays relevant and delivers measurable results.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_40px_-22px_rgba(33,65,165,0.55)] hover:bg-primary/90"
                onClick={() => (window.location.href = CREATIVE_URL)}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="max-w-3xl space-y-4 text-center md:space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Services that build modern, high-performing brands.</h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              From strategy to delivery, we partner with teams to design digital products and marketing experiences that align with business goals and customer expectations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_24px_55px_-35px_rgba(15,30,70,0.45)] backdrop-blur"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {service.title}
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {service.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="container relative z-10 mx-auto px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
              <div className="space-y-4 text-left">
                <h3 className="text-3xl font-semibold text-slate-900 md:text-4xl">How we collaborate</h3>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  Every engagement starts with understanding business objectives and audience insight. We work alongside marketing, product, and leadership teams to deliver ideas that are as strategic as they are creative.
                </p>
              </div>
              <div className="grid gap-4 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-[0_24px_60px_-30px_rgba(14,28,88,0.35)] backdrop-blur">
                {["Discovery workshops and roadmap planning", "Design, copy, and development handled under one roof", "Optimization cycles informed by data and user feedback"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      •
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Creative;
