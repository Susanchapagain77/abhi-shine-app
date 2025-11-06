import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to advance your career through our Academy or grow your business 
            with our Creative services, we're here to help you succeed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg">
              Get Started Today
            </Button>
            <Button size="lg" variant="secondary">
              Schedule a Call
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground font-medium">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
