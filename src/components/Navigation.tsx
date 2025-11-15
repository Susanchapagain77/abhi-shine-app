import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Navigation = () => {
  const ACADEMY_URL = import.meta.env.VITE_ACADEMY_URL || 'http://localhost:8081/';
  const CREATIVE_URL = import.meta.env.VITE_CREATIVE_URL || 'http://localhost:8082/';
  
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <span className="text-foreground">ABHIDH</span>
            <span className="text-primary"> GROUP</span>
          </div>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <NavLink to="/" className="text-foreground hover:text-primary transition-colors font-medium" activeClassName="text-primary">
            Home
          </NavLink>
          <NavLink to="/about" className="text-foreground hover:text-primary transition-colors font-medium" activeClassName="text-primary">
            About
          </NavLink>
          <NavLink to="/academy" className="text-foreground hover:text-primary transition-colors font-medium" activeClassName="text-primary">
            Academy
          </NavLink>
          <NavLink to="/creative" className="text-foreground hover:text-primary transition-colors font-medium" activeClassName="text-primary">
            Creative
          </NavLink>
          <NavLink to="/contact" className="text-foreground hover:text-primary transition-colors font-medium" activeClassName="text-primary">
            Contact
          </NavLink>
        </div>

        <Button size="sm" className="hidden md:inline-flex" onClick={() => window.open(ACADEMY_URL, '_blank')?.focus()}>
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
