import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "ABOUT", path: "/about" },
    { name: "RESERVATIONS", path: "/reservations" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link to="/" className="text-2xl md:text-3xl font-heading transition-smooth hover:text-primary">
            Fork & Flame
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wider transition-smooth relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-4px] after:left-0 after:origin-left after:transition-transform after:duration-300 ${
                  location.pathname === link.path
                    ? "text-primary after:bg-primary after:scale-x-100"
                    : "text-foreground hover:text-primary after:bg-primary after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="sm" className="glow-coral">
              Book Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-in">
          <div className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm tracking-wider py-2 transition-smooth ${
                  location.pathname === link.path ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="w-full mt-4">
              Book Table
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
