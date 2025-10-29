import interiorImage from "@/assets/restaurant-interior.jpg";

const Experience = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              A Vibe Worth{" "}
              <span className="gradient-coral bg-clip-text text-transparent">Tasting</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Fork & Flame isn't just a restaurant — it's an experience. We believe that dining
              should engage all your senses, from the artistry on your plate to the ambiance that
              surrounds you.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Our fusion cuisine celebrates bold flavors and cultural blends, crafted with passion
              and presented with flair. Every visit is a journey through taste, texture, and visual
              delight.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-heading text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Signature Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-primary mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Diners</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={interiorImage}
                alt="Fork & Flame Restaurant Interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
