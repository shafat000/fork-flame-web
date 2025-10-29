import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Clock, Users, Sparkles } from "lucide-react";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎉 Reservation confirmed — See you soon!", {
      description: `We've sent a confirmation to ${formData.email}`,
    });
    setFormData({ name: "", email: "", date: "", time: "", guests: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="gradient-ambient py-20">
          <div className="container-custom text-center animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl mb-4">Reserve Your Table</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure your spot for an unforgettable dining experience
            </p>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="section-spacing">
          <div className="container-custom max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-base mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <Label htmlFor="date" className="text-base mb-2 block flex items-center gap-2">
                    <Calendar size={16} />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="text-base mb-2 block flex items-center gap-2">
                    <Clock size={16} />
                    Time
                  </Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => setFormData({ ...formData, time: value })}
                  >
                    <SelectTrigger className="focus:ring-2 focus:ring-primary">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="guests" className="text-base mb-2 block flex items-center gap-2">
                    <Users size={16} />
                    Guests
                  </Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => setFormData({ ...formData, guests: value })}
                  >
                    <SelectTrigger className="focus:ring-2 focus:ring-primary">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full glow-coral text-lg">
                <Sparkles className="mr-2" size={20} />
                Confirm Reservation
              </Button>
            </form>

            {/* Special Events */}
            <div className="mt-12 p-8 bg-gradient-to-r from-lavender/20 to-mint/20 rounded-2xl animate-fade-in">
              <h3 className="font-heading text-2xl mb-4 text-center">Planning a Celebration?</h3>
              <p className="text-center text-muted-foreground mb-6">
                We love hosting special events! Whether it's a birthday, anniversary, or corporate
                gathering, we'll make it memorable.
              </p>
              <div className="text-center">
                <Button variant="outline" size="lg" className="border-2">
                  Contact for Events
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;
