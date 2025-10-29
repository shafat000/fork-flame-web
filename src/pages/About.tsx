import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import chefImage from "@/assets/chef-portrait.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="gradient-ambient py-20">
          <div className="container-custom text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl mb-4">Our Story</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From sparks of creativity to flavors of fire
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-heading text-4xl mb-6">The Beginning</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  Fork & Flame was born from a simple idea: food should be an experience that
                  engages all the senses. Our founder, Chef Alex Martinez, traveled the world
                  exploring culinary traditions, drawing inspiration from bustling Asian night
                  markets to vibrant Latin American street food.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  In 2019, that dream became reality. Fork & Flame opened its doors with a mission
                  to celebrate cultural fusion through creative, artistic cuisine. We believe that
                  every dish tells a story, and we're here to share those stories with you.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Today, we continue to push boundaries, blending traditional techniques with
                  modern innovation, all while maintaining our commitment to sustainability and
                  supporting local producers.
                </p>
              </div>
              <div className="relative animate-scale-in rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={interiorImage}
                  alt="Fork & Flame Interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chef Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-scale-in rounded-2xl overflow-hidden shadow-2xl lg:order-1">
                <img
                  src={chefImage}
                  alt="Chef Alex Martinez"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-heading text-2xl text-primary italic">
                    "Food is art. Fire is the brush."
                  </p>
                </div>
              </div>
              <div className="animate-fade-in lg:order-2">
                <h2 className="font-heading text-4xl mb-6">Meet the Chef</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Chef Alex Martinez</span> brings
                  over 15 years of culinary expertise to Fork & Flame. Trained in Michelin-starred
                  kitchens across Europe and Asia, Alex returned home with a vision to create
                  something uniquely personal.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  His philosophy is simple: respect ingredients, honor traditions, and never stop
                  experimenting. Alex believes that the best dishes come from understanding both
                  technique and emotion — cooking with your heart as much as your hands.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When he's not in the kitchen, you'll find Alex at local farmers' markets,
                  sourcing the freshest ingredients and building relationships with the people who
                  grow our food.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl mb-12">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-coral/10 hover:bg-coral/20 transition-smooth">
                  <h3 className="font-heading text-2xl text-coral mb-4">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We partner with local farms and suppliers who share our commitment to
                    sustainable, ethical practices.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-mustard/10 hover:bg-mustard/20 transition-smooth">
                  <h3 className="font-heading text-2xl text-mustard mb-4">Artistry</h3>
                  <p className="text-muted-foreground">
                    Every plate is a canvas. We believe presentation is as important as flavor in
                    creating memorable experiences.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-mint/20 hover:bg-mint/30 transition-smooth">
                  <h3 className="font-heading text-2xl text-secondary mb-4">Community</h3>
                  <p className="text-muted-foreground">
                    Food brings people together. We're proud to be a gathering place for our
                    vibrant local community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
