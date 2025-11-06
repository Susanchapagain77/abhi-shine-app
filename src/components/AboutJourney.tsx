import Timeline from "@/components/Timeline";

const AboutJourney = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            Key milestones in our mission to transform education and business growth
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
