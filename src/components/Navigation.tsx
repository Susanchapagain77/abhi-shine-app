import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-foreground">ABHIDH</span>
              <span className="text-primary"> GROUP</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#academy" className="text-foreground hover:text-primary transition-colors font-medium">
              Academy
            </a>
            <a href="#creative" className="text-foreground hover:text-primary transition-colors font-medium">
              Creative
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
