import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EmailButton from "@/components/EmailButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pfIssue: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.pfIssue.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your inquiry",
        variant: "destructive"
      });
      return;
    }

    // Send email
    const subject = encodeURIComponent("PF Assistance Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nPF Issue:\n${formData.pfIssue}`
    );
    window.location.href = `mailto:support@pfdoctor.in?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client...",
      description: "Please send the email to complete your inquiry."
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", pfIssue: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get in touch with our PF experts. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Email CTA Banner */}
      <section className="py-12 gradient-dark border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-display font-bold">Get Expert Help via Email</h2>
            <p className="text-muted-foreground">
              📩 Email: <a href="mailto:support@pfdoctor.in" className="text-primary hover:underline font-semibold">support@pfdoctor.in</a>
            </p>
            <p className="text-sm text-muted-foreground">
              For fastest response, email us directly. Our experts will respond within 24 hours!
            </p>
            <EmailButton variant="primary" size="lg" />
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
                    className="w-full glass-card"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-card"
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
                    className="w-full glass-card"
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
                    className="w-full min-h-32 glass-card"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 gradient-primary transition-all hover:scale-105 hover:shadow-glow">
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
                <div className="flex items-start gap-4 p-6 glass-card rounded-lg border hover:shadow-glow transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                    <p className="text-sm text-muted-foreground mt-1">Call us during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-card rounded-lg border hover:shadow-glow transition-all">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:support@pfdoctor.in" className="text-primary hover:underline">
                      support@pfdoctor.in
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-card rounded-lg border hover:shadow-glow transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <a 
                      href="https://maps.app.goo.gl/2CrhvGSuCtt7ADhr7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Find Us: Thane, Maharashtra, India
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Visit by appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-card rounded-lg border hover:shadow-glow transition-all">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Support Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-muted-foreground">10:00 AM - 7:00 PM IST</p>
                    <p className="text-sm text-muted-foreground mt-1">Email support 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-8">Find Us</h2>
            <div className="glass-card rounded-2xl border-2 overflow-hidden" style={{ height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120615.72236587253!2d72.83384745!3d19.21820225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0afd203acb247d7!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PF Doctor Location - Thane, Maharashtra"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://maps.app.goo.gl/2CrhvGSuCtt7ADhr7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Button variant="outline" size="lg" className="gradient-primary text-primary-foreground border-0 hover:scale-105 transition-all">
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </Button>
              </a>
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
            <EmailButton variant="primary" size="lg" text="Email Us Now" />
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
                <span>4+ Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EmailButton variant="floating" />
    </div>
  );
};

export default Contact;
