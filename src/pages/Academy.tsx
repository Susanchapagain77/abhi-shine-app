import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Soft Skills Training",
    description:
      "Technical knowledge alone is not enough. We develop leadership, communication, time management, and collaboration skills so learners can thrive in classrooms, workplaces, and client-facing environments.",
    highlights: [
      "Confidence-building workshops and presentation coaching",
      "Interactive sessions that strengthen communication and teamwork",
      "Career readiness support for students, graduates, and professionals",
    ],
  },
  {
    title: "Technical & Career Training",
    description:
      "Digital-first industries demand practical expertise. Our programs span digital marketing, artificial intelligence, prompt engineering, cybersecurity, Microsoft Excel, accounting, taxation, and more—designed to deliver hands-on, job-ready skills.",
    highlights: [
      "Curriculum designed with active professionals and mentors",
      "Tools and projects that mirror real business scenarios",
      "Career pathways for business, finance, and technology roles",
    ],
  },
  {
    title: "Corporate Training Programs",
    description:
      "Organizations grow when their people grow. We partner with schools, colleges, and companies to deliver tailored workshops that improve performance, strengthen culture, and boost productivity.",
    highlights: [
      "Leadership development and team alignment modules",
      "Employee engagement, wellness, and culture-building sessions",
      "Custom roadmaps shaped around institutional or corporate goals",
    ],
  },
];

const Academy = () => {
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || "http://localhost:8081/";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="space-y-24 pt-28">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-[#edf2ff] to-background" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-[-200px] h-[420px] w-[520px] rotate-12 rounded-full bg-primary/20 blur-[140px]" />
            <div className="absolute bottom-[-180px] left-[-240px] h-[320px] w-[400px] -rotate-6 rounded-full bg-primary/10 blur-[120px]" />
          </div>
          <div className="container relative z-10 mx-auto px-6 py-24">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Abhidh Academy
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Education designed for real challenges.
              </h1>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                At Abhidh Academy, we believe education should go beyond classrooms and textbooks—it should prepare individuals for the realities of life and work. Every program is built to be engaging, practical, and focused on application so learners can contribute from day one.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_40px_-22px_rgba(33,65,165,0.55)] hover:bg-primary/90"
                onClick={() => (window.location.href = ACADEMY_URL)}
              >
                Explore Courses
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="max-w-3xl space-y-4 text-center md:space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Training that transforms potential into results.</h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Our curriculum bridges the gap between knowledge and performance. Whether you are preparing students for interviews, upskilling a team, or transitioning into a new role, Abhidh Academy provides the expertise, tools, and mentorship to make it happen.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_24px_55px_-35px_rgba(15,30,70,0.45)] backdrop-blur"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {category.title}
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{category.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {category.highlights.map((point) => (
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
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
              <div className="space-y-4 text-left">
                <h3 className="text-3xl font-semibold text-slate-900 md:text-4xl">Why educators and teams partner with us</h3>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  We co-create learning journeys with institutions and businesses, ensuring every cohort leaves with tools they can apply immediately. Mentors, industry projects, and accountability checkpoints keep learners moving forward.
                </p>
              </div>
              <div className="grid gap-4 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-[0_24px_60px_-30px_rgba(14,28,88,0.35)] backdrop-blur">
                {["Practical, mentor-led sessions", "Outcome tracking for every cohort", "Flexible delivery for on-site or virtual audiences"].map((item) => (
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

export default Academy;
