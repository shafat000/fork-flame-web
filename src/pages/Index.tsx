import Navigation from "@/components/Navigation";
import Hero from "@/components/home/Hero";
import SignatureDishes from "@/components/home/SignatureDishes";
import Experience from "@/components/home/Experience";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <SignatureDishes />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
