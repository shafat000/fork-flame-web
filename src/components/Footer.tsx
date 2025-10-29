import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl mb-4 text-primary">Fork & Flame</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Where culinary creativity meets comfort. Experience modern fusion dining with bold
              flavors and artistic presentation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/menu" className="text-sm hover:text-primary transition-smooth">
                View Menu
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-smooth">
                Our Story
              </Link>
              <Link to="/reservations" className="text-sm hover:text-primary transition-smooth">
                Reservations
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-smooth">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Hours</h4>
            <div className="text-sm space-y-2">
              <p>Monday – Thursday: 12PM – 10PM</p>
              <p>Friday – Sunday: 12PM – 12AM</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-sm">
            <span className="gradient-gold bg-clip-text text-transparent font-heading text-lg">
              See You Soon ✨ — Fork & Flame
            </span>
          </p>
          <p className="text-center text-xs mt-4 opacity-70">
            © {new Date().getFullYear()} Fork & Flame. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
