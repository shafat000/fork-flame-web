import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "Is parking available?",
      answer: "Yes! We have a complimentary parking lot adjacent to the restaurant. Street parking is also available nearby.",
    },
    {
      question: "Do you offer vegan options?",
      answer: "Absolutely! We have several vegan dishes on our menu, and our chef can modify many items to accommodate vegan preferences. Just let us know!",
    },
    {
      question: "What's the dress code?",
      answer: "We have a smart casual dress code. While we want you to feel comfortable, we ask that guests avoid overly casual attire like athletic wear or flip-flops.",
    },
    {
      question: "Can I bring my own wine?",
      answer: "Yes, we allow BYOB with a corkage fee of $25 per bottle. We also have an extensive wine list curated by our sommelier.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="gradient-ambient py-20">
          <div className="container-custom text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you — let's connect
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-fade-in">
                <h2 className="font-heading text-3xl mb-8">Visit Us</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Culinary Street
                        <br />
                        Downtown District, CA 90210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@forkandflame.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Hours</h3>
                      <p className="text-muted-foreground">
                        Mon–Thu: 12PM–10PM
                        <br />
                        Fri–Sun: 12PM–12AM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Map View</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="font-heading text-3xl mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name" className="text-base mb-2 block">
                      Your Name
                    </Label>
                    <Input
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-base mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="focus:ring-2 focus:ring-primary min-h-32"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full glow-coral">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="font-heading text-4xl text-center mb-12 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="animate-fade-in">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
