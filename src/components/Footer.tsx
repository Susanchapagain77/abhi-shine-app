import { Facebook, Instagram, Linkedin, Youtube, Music } from "lucide-react";

const Footer = () => {
  // Social media links
  const FACEBOOK_URL = "https://www.facebook.com/abhidhgroup/";
  const INSTAGRAM_URL = "https://www.instagram.com/abhidhgroup/";
  const LINKEDIN_URL = "https://www.linkedin.com/company/abhidhacademy";
  const YOUTUBE_URL = "https://www.youtube.com/@AbhidhGroup";
  const TIKTOK_URL = "https://www.tiktok.com/@abhidh.group";

  return (
    <footer className="relative py-12 px-6 border-t border-white/10 bg-card/60 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto relative">
        {/* Logo and Tagline - Center Aligned */}
        <div className="text-center mb-12">
          <div className="text-2xl font-bold mb-3">
            <span className="text-foreground">ABHIDH</span>
            <span className="text-primary"> GROUP</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering people and businesses through skills and digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
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

          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 text-foreground">Contact</h4>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="font-medium text-foreground min-w-[70px]">Email:</span>
                <a href="mailto:info@abhidhgroup.com" className="hover:text-primary transition-colors break-words">
                  info@abhidhgroup.com
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="font-medium text-foreground min-w-[70px]">Phone:</span>
                <span>+977-9841080407 / +977-9801110981</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="font-medium text-foreground min-w-[70px]">Location:</span>
                <span>Nardevi, Kathmandu, Nepal</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-4 text-foreground">Follow Us</h4>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#1877F2] transition-colors p-2 hover:bg-[#1877F2]/10 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#E4405F] transition-colors p-2 hover:bg-[#E4405F]/10 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#0A66C2] transition-colors p-2 hover:bg-[#0A66C2]/10 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#FF0000] transition-colors p-2 hover:bg-[#FF0000]/10 rounded-full"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#000000] transition-colors p-2 hover:bg-[#000000]/10 rounded-full"
                  aria-label="TikTok"
                >
                  <Music className="h-5 w-5" />
                </a>
              </div>
            </div>
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
