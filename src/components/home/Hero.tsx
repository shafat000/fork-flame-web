import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dish.jpg";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Vibe", "Flame", "Passion"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center animate-fade-in-slow">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Taste the{" "}
          <span className="gradient-coral bg-clip-text text-transparent inline-block transition-smooth animate-float">
            {words[currentWord]}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          Where culinary creativity meets comfort
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/reservations">
            <Button size="lg" className="glow-coral text-lg px-8 py-6 animate-glow-pulse">
              Book a Table
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="/menu">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              View Menu
            </Button>
          </Link>
        </div>

        <div className="mt-16 animate-float">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Scroll to Explore
          </p>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full mx-auto mt-4 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
