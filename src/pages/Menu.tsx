import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

  const menuItems = [
    {
      id: 1,
      name: "Fusion Fiesta Bowl",
      category: "Mains",
      description: "Asian-Latin fusion with seared protein, vibrant vegetables, and artistic sauce",
      price: "$28",
      image: dish1,
      tags: ["Spicy", "Chef's Pick"],
    },
    {
      id: 2,
      name: "Lavender Dreams Cake",
      category: "Desserts",
      description: "Modern dessert with gold leaf, edible flowers, and cream lavender mousse",
      price: "$14",
      image: dish2,
      tags: ["Signature"],
    },
    {
      id: 3,
      name: "Garden Fresh Medley",
      category: "Starters",
      description: "Colorful seasonal vegetables with microgreens and citrus dressing",
      price: "$16",
      image: dish3,
      tags: ["Vegetarian", "New"],
    },
    {
      id: 4,
      name: "Spicy Tuna Tartare",
      category: "Starters",
      description: "Fresh tuna with avocado, crispy wonton, and sesame-soy glaze",
      price: "$18",
      image: dish1,
      tags: ["Spicy"],
    },
    {
      id: 5,
      name: "Miso Glazed Salmon",
      category: "Mains",
      description: "Pan-seared salmon with miso butter, baby bok choy, and jasmine rice",
      price: "$32",
      image: dish1,
      tags: ["Chef's Pick"],
    },
    {
      id: 6,
      name: "Matcha Tiramisu",
      category: "Desserts",
      description: "Japanese-Italian fusion with green tea mascarpone and ladyfingers",
      price: "$12",
      image: dish2,
      tags: ["Signature"],
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="gradient-ambient py-20">
          <div className="container-custom text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl mb-4">Our Menu</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Artistry on every plate — explore our curated selection of fusion delights
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-bounce"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-coral/10 text-coral"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-xl">{item.name}</h3>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
