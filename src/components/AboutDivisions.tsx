import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, CheckCircle } from "lucide-react";

const AboutDivisions = () => {
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || "http://localhost:8081/";
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || "http://localhost:8082/";

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Group Identity</h2>
          <p className="text-lg text-muted-foreground">
            Our identity as a group company lies in the strength of our two arms — education and digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Abhidh Academy */}
          <div className="group relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 lg:p-10 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Abhidh Academy</h3>
                  <p className="text-sm font-medium text-primary">Professional Training Institute</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                A professional training institute that nurtures skills, confidence, and career readiness among students, professionals, and organizations.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "High-impact soft skills, leadership, and communication programs.",
                  "Hands-on technical training in digital marketing, AI, IT, and analytics.",
                  "Customized workshops for schools, colleges, and corporate teams."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/item">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full sm:w-auto" onClick={() => (window.location.href = ACADEMY_URL)}>
                Explore Abhidh Academy
              </Button>
            </div>
          </div>

          {/* Abhidh Creative */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 lg:p-10 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Abhidh Creative</h3>
                  <p className="text-sm font-medium text-primary">Digital & IT Solutions Partner</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                A digital and IT solutions partner that helps businesses expand their reach, optimize their brand presence, and embrace innovation.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Data-driven digital marketing campaigns and SEO strategies.",
                  "Website, mobile app, and custom software development with long-term support.",
                  "Branding, creative design, and multimedia storytelling for modern audiences."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/item">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => (window.location.href = CREATIVE_URL)}
              >
                Explore Abhidh Creative
              </Button>
            </div>
          </div>
        </div>

        {/* Impact statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="p-8 lg:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-primary/20">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Together, We Transform Society</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine the power of education and technology to drive meaningful transformation in society, creating lasting impact through skills development and digital innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDivisions;
