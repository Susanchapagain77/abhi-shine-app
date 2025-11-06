import { Button } from "@/components/ui/button";
import Timeline from "@/components/Timeline";
import {
  Users,
  Star,
  Zap,
  Leaf,
  BookOpen,
  Monitor,
  Smartphone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const AboutSection = () => {
  const values = [
    { title: "People First", description: "Every decision prioritizes the growth and success of the people we serve.", Icon: Users },
    { title: "Excellence", description: "We maintain the highest standards in both our educational programs and business solutions.", Icon: Star },
    { title: "Innovation", description: "We continuously evolve our methods to stay ahead of industry trends and needs.", Icon: Zap },
    { title: "Impact", description: "We measure our success by the positive transformation we create in lives and businesses.", Icon: Leaf },
  ];

  const academyCourses = [
    { title: "IT Trainings", icon: Monitor },
    { title: "Digital Marketing", icon: Smartphone },
    { title: "Featured Courses", icon: BookOpen },
  ];

  const creativeServices = [
    { title: "IT & Development", icon: Monitor },
    { title: "Digital Marketing", icon: Smartphone },
    { title: "Creative Solutions", icon: BookOpen },
  ];

  return (
    <section id="about" className="py-12 px-6">
      <div className="container mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold">Who We Are</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At <strong>Abhidh Group</strong>, we believe that growth is not just about achieving numbers — it is about creating value that lasts.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Story, Mission, Vision */}
          <div className="space-y-6">
            <div className="prose dark:prose-invert text-muted-foreground">
              <h3>Our Story</h3>
              <p>
                We exist to empower individuals with the skills they need to succeed and to enable businesses with the strategies and technologies that help them thrive.
              </p>
              <p>
                In an increasingly competitive world, we recognized a critical gap between traditional education and the practical skills needed to succeed in modern careers and businesses.
              </p>
              <p>
                This realization led to the creation of <strong>ABHIDH Group</strong> — a unique ecosystem where individuals can develop essential skills through our Academy while businesses can leverage cutting-edge digital solutions through our Creative division.
              </p>
              <p>
                Today, we stand as a bridge between learning and doing, theory and practice, potential and achievement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-card rounded-2xl border border-border">
                <h4 className="font-bold">Our Mission</h4>
                <p className="text-muted-foreground mt-2">To empower individuals and organizations through comprehensive education and innovative digital solutions.</p>
              </div>
              <div className="p-5 bg-card rounded-2xl border border-border">
                <h4 className="font-bold">Our Vision</h4>
                <p className="text-muted-foreground mt-2">To be the leading catalyst for personal and business transformation through integrated learning and technology.</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-yellow-400 text-black px-8 py-3 shadow">Explore Academy</Button>
              <Button size="sm" variant="outline" className="rounded-full">Visit Creative</Button>
            </div>
          </div>

          {/* Right: Identity, Divisions, Contact */}
          <aside className="space-y-6">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h4 className="text-xl font-bold mb-2">Our Group Identity</h4>
              <p className="text-muted-foreground mb-4">Our identity as a group company lies in the strength of our two arms.</p>

              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Users size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold">Abhidh Academy</h5>
                    <p className="text-sm text-muted-foreground">Professional Training Institute nurturing skills, confidence, and career readiness.</p>
                    <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground">
                      <li>Skills Development</li>
                      <li>Confidence Building</li>
                      <li>Career Readiness</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Monitor size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold">Abhidh Creative</h5>
                    <p className="text-sm text-muted-foreground">Digital &amp; IT solutions partner helping businesses expand reach and optimize brand presence.</p>
                    <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground">
                      <li>Digital Expansion</li>
                      <li>Brand Optimization</li>
                      <li>Innovation Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h4 className="font-bold mb-2">Contact</h4>
              <p className="text-sm text-muted-foreground">Nardevi, Kathmandu</p>
              <p className="text-sm text-muted-foreground mt-1">Phone: 9801110981 / 9841080407</p>
              <p className="text-sm text-muted-foreground mt-1">Email: info@abidhgroup.com</p>

              <div className="mt-4 flex items-center gap-3">
                <a aria-label="Facebook" href="#" className="text-muted-foreground hover:text-primary"><Facebook size={18} /></a>
                <a aria-label="Instagram" href="#" className="text-muted-foreground hover:text-primary"><Instagram size={18} /></a>
                <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-primary"><Twitter size={18} /></a>
                <a aria-label="LinkedIn" href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl border border-border">
              <h4 className="font-bold mb-2">Together, We Transform Society</h4>
              <p className="text-muted-foreground">We combine the power of education and technology to drive meaningful transformation in society, creating lasting impact through skills development and digital innovation.</p>
            </div>
          </aside>
        </div>

        {/* Values */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center mb-6">Our Values</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={i} className="p-6 bg-card rounded-xl text-center border border-border">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-3">
                  <v.Icon size={20} />
                </div>
                <h5 className="font-semibold">{v.title}</h5>
                <p className="text-sm text-muted-foreground mt-2">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey / Timeline */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Our Journey</h3>
          <div className="max-w-5xl mx-auto px-4">
            <Timeline />
          </div>
        </div>

        {/* Courses & Services */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="p-6 bg-card rounded-2xl border border-border">
            <h4 className="font-bold mb-3">Abidh Academy — Featured</h4>
            <p className="text-sm text-muted-foreground mb-4">A professional training institute that nurtures skills, confidence, and career readiness among students, professionals, and organizations.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {academyCourses.map((c, i) => (
                <div key={i} className="p-3 bg-background rounded-lg flex items-center gap-3">
                  <c.icon size={18} />
                  <div className="text-sm">{c.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-card rounded-2xl border border-border">
            <h4 className="font-bold mb-3">Abidh Creative — Services</h4>
            <p className="text-sm text-muted-foreground mb-4">A digital & IT solutions partner that helps businesses expand their reach, optimize their brand presence, and embrace innovation.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {creativeServices.map((c, i) => (
                <div key={i} className="p-3 bg-background rounded-lg flex items-center gap-3">
                  <c.icon size={18} />
                  <div className="text-sm">{c.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer mini */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <div>Follow Us — Facebook · Instagram · Twitter · LinkedIn · TikTok</div>
          <div className="mt-2">© 2025 Abidh Group. All rights reserved.</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
