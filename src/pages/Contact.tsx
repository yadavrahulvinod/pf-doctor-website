import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pfIssue: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.pfIssue.trim()) {
      toast({
        title: "Please fill all fields",
        description: "Name, phone number, and PF issue description are required",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send to a backend
    toast({
      title: "Message received!",
      description: "We'll contact you shortly via WhatsApp to discuss your PF issue."
    });

    // Reset form
    setFormData({ name: "", phone: "", pfIssue: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Contact <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get in touch with our PF experts. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="py-12 bg-secondary/10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-display font-bold">Get Instant Help on WhatsApp</h2>
            <p className="text-muted-foreground">
              For fastest response, chat with us directly on WhatsApp. Our experts are ready to assist you!
            </p>
            <WhatsAppButton variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="pfIssue" className="block text-sm font-medium mb-2">
                    Describe Your PF Issue *
                  </label>
                  <Textarea
                    id="pfIssue"
                    placeholder="Tell us about your PF problem - withdrawal, transfer, KYC update, etc."
                    value={formData.pfIssue}
                    onChange={(e) => setFormData({ ...formData, pfIssue: e.target.value })}
                    className="w-full min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Contact Details</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                    <p className="text-sm text-muted-foreground mt-1">Call us during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@pfdoctor.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-muted-foreground">Thane, Maharashtra, India</p>
                    <p className="text-sm text-muted-foreground mt-1">Visit by appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Support Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-muted-foreground">10:00 AM - 7:00 PM IST</p>
                    <p className="text-sm text-muted-foreground mt-1">WhatsApp available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-8">Find Us</h2>
            <div className="bg-card rounded-2xl border-2 border-border overflow-hidden" style={{ height: "400px" }}>
              <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">
                    Thane, Maharashtra, India
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Google Maps integration available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Solve Your PF Issue?
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't let PF problems stress you out. Contact us now and get expert help immediately!
            </p>
            <WhatsAppButton variant="primary" size="lg" text="Chat with Expert Now" />
            <div className="flex items-center justify-center gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-secondary">✓</span>
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">✓</span>
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">✓</span>
                <span>4.9★ Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Contact;
