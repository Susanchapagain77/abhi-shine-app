import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || 'http://localhost:8081/';
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || 'http://localhost:8082/';
  
  const navLinks = [
    { to: "/", label: "Home", isExternal: false },
    { to: "/about", label: "Who We Are", isExternal: false },
    { to: "/gallery", label: "Gallery", isExternal: false },
    { to: ACADEMY_URL, label: "Academy", isExternal: true },
    { to: CREATIVE_URL, label: "Creative", isExternal: true },
    { to: "/contact", label: "Contact", isExternal: false },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleExternalClick = (url: string) => {
    window.open(url, '_blank')?.focus();
    handleLinkClick();
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // Scroll to top after navigation completes
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    } else {
      // If already on homepage, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center">
          <NavLink 
            to="/" 
            className="flex items-center cursor-pointer transition-opacity hover:opacity-80"
            onClick={handleLogoClick}
          >
            <img 
              src="/logo.png" 
              alt="Abhidh Group Logo" 
              className="h-14 w-auto object-contain"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation - visible from lg breakpoint */}
        <div className="hidden items-center space-x-8 lg:flex lg:ml-auto">
          {navLinks.map((link) => 
            link.isExternal ? (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(link.to, '_blank')?.focus();
                }}
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <NavLink 
                key={link.to}
                to={link.to} 
                className="text-foreground hover:text-primary transition-colors font-medium" 
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu - visible below lg breakpoint */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => 
                  link.isExternal ? (
                    <a
                      key={link.label}
                      href={link.to}
                      onClick={(e) => {
                        e.preventDefault();
                        handleExternalClick(link.to);
                      }}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      activeClassName="text-primary"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
