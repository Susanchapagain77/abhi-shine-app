const AboutStory = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At <span className="font-semibold text-foreground">Abhidh Group</span>, we believe that growth is not just about achieving numbers — it is about creating value that lasts. We exist to empower individuals with the skills they need to succeed and to enable businesses with the strategies and technologies that help them thrive.
              </p>
              <p>
                Our identity as a group company lies in the strength of our two arms: <strong className="text-foreground">Abhidh Academy</strong>, a professional training institute that nurtures skills, confidence, and career readiness among students, professionals, and organizations; and <strong className="text-foreground">Abhidh Creative</strong>, a digital and IT solutions partner that helps businesses expand their reach, optimize their brand presence, and embrace innovation.
              </p>
              <p>
                Together, we combine the power of <em>education and technology</em> to drive meaningful transformation in society.
              </p>
              <p>
                Abhidh Group was founded with a simple yet powerful idea — to <strong className="text-foreground">bridge the gap between potential and opportunity</strong>. We recognized that while many individuals in Nepal and beyond had talent, they lacked the professional training to excel. At the same time, many businesses struggled to adapt to the fast-paced digital economy.
              </p>
              <p className="text-xl font-medium text-foreground">
                Today, our journey is about creating synergy between the two — building people and businesses together for a stronger tomorrow.
              </p>
            </div>
          </div>

          {/* Right: Mission & Vision cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="group relative p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower people through skill development and enable businesses with digital and IT solutions that fuel long-term growth.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a globally recognized hub for professional learning and digital transformation, shaping a future where individuals are confident, businesses are competitive, and communities are progressive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
