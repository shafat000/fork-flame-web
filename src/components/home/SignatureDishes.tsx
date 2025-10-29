import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const SignatureDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Fusion Fiesta",
      description: "Asian-Latin fusion with vibrant vegetables and artistic sauce presentation",
      image: dish1,
      badge: "Chef's Pick",
      badgeColor: "bg-coral text-white",
    },
    {
      id: 2,
      name: "Lavender Dreams",
      description: "Artistic modern dessert with gold leaf and edible flowers",
      image: dish2,
      badge: "Fusion Favorite",
      badgeColor: "bg-lavender text-secondary",
    },
    {
      id: 3,
      name: "Garden Fresh",
      description: "Vibrant appetizer with microgreens and seasonal ingredients",
      image: dish3,
      badge: "New Arrival",
      badgeColor: "bg-mint text-secondary",
    },
  ];

  return (
    <section className="section-spacing gradient-ambient">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            Signature Creations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every dish tells a story — crafted with fire and flair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-smooth hover:shadow-2xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                <Badge className={`${dish.badgeColor} mb-3 w-fit`}>{dish.badge}</Badge>
                <h3 className="font-heading text-2xl text-white mb-2">{dish.name}</h3>
                <p className="text-sm text-white/90">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/menu">
            <Button
              size="lg"
              variant="outline"
              className="gradient-gold text-secondary border-0 hover:scale-105 transition-bounce"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
