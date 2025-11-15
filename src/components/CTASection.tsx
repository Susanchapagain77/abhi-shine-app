import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-10 right-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl opacity-70" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-16 shadow-[0_35px_80px_-35px_rgba(18,40,90,0.75)]">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/70 to-foreground/50 bg-clip-text text-transparent">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-lg text-muted-foreground/85 max-w-2xl mx-auto">
            We are here to listen, collaborate, and deliver solutions tailored to your needs. Whether you want to upskill yourself, organize a training program, or boost your business with digital solutions, <span className="font-semibold text-foreground">Abhidh Group</span> is ready to be your partner in growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 shadow-[0_18px_40px_-20px_rgba(20,40,90,0.6)] hover:-translate-y-0.5 transition-transform">
              Contact Us
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full border-white/20 bg-white/10 text-primary hover:bg-white/20 backdrop-blur">
              Schedule a Call
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-md shadow-inner shadow-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground/85 font-medium">Students Trained</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-md shadow-inner shadow-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground/85 font-medium">Projects Delivered</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-md shadow-inner shadow-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground/85 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
