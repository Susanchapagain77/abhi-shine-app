import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const AboutContact = () => {
  const contactInfo = [
    { icon: MapPin, text: "Nardevi, Kathmandu, Nepal" },
    { icon: Phone, text: "+977-9841080407 / +977-9801110981" },
    { icon: Mail, text: "info@abidhgroup.com" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your journey with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">{info.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm font-semibold text-muted-foreground mb-4">Follow Us</p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
