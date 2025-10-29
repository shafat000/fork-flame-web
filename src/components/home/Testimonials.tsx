import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "An absolutely incredible dining experience! The fusion of flavors is unlike anything I've tasted before. The ambiance is perfect for a special night out.",
      role: "Food Enthusiast",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "Fork & Flame has become my go-to spot for impressing clients. The presentation is stunning and the service is impeccable. Highly recommended!",
      role: "Business Owner",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      text: "From the moment you walk in, you know you're in for something special. The creative dishes and cozy atmosphere make every visit memorable.",
      role: "Local Resident",
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from our guests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-8 transition-smooth hover:shadow-xl hover:-translate-y-2 animate-fade-in border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-mustard text-mustard" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
