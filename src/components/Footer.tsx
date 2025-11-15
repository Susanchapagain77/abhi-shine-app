const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10 bg-card/60 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-foreground">ABHIDH</span>
              <span className="text-primary"> GROUP</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering people and businesses through skills and digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/academy" className="text-muted-foreground hover:text-primary transition-colors">
                  Academy
                </a>
              </li>
              <li>
                <a href="/creative" className="text-muted-foreground hover:text-primary transition-colors">
                  Creative
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Training & Development</li>
              <li className="text-muted-foreground">Digital Marketing</li>
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Mobile Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@abhidhgroup.com</li>
              <li>Phone: +977-9841080407 / +977-9801110981</li>
              <li>Location: Nardevi, Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abhidh Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
