import { CheckCircle, Users, Clock, Shield, TrendingUp, FileCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const services = [
    {
      icon: FileCheck,
      title: "PF Withdrawal",
      description: "Fast and hassle-free PF withdrawal assistance with complete documentation support and real-time tracking."
    },
    {
      icon: TrendingUp,
      title: "PF Transfer",
      description: "Seamless PF transfer between employers with zero errors and complete transparency throughout the process."
    },
    {
      icon: Users,
      title: "UAN Activation",
      description: "Quick UAN activation and registration to help you access your PF account without any complications."
    },
    {
      icon: CheckCircle,
      title: "KYC Update",
      description: "Update your KYC details including name, DOB, PAN, and Aadhaar with expert guidance and support."
    },
    {
      icon: Shield,
      title: "PF Account Correction",
      description: "Fix name mismatches, DOB errors, and other account discrepancies with professional assistance."
    },
    {
      icon: Clock,
      title: "PF Loan Assistance",
      description: "Get help with PF advance/loan applications for medical, education, housing, and other needs."
    },
    {
      icon: FileCheck,
      title: "FNF Claim Support",
      description: "Full and Final settlement support to ensure you receive all your dues when changing jobs."
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "PF Doctor helped me withdraw my PF within 10 days when I was stuck for months. Professional and transparent service!",
      service: "PF Withdrawal"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "My name was misspelled in my PF account. PF Doctor fixed it quickly and kept me updated throughout the process.",
      service: "KYC Update"
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Transferred my PF from 3 different employers smoothly. The team was very knowledgeable and helpful.",
      service: "PF Transfer"
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      text: "Got my UAN activated and linked all my previous PF accounts. Excellent service and great support!",
      service: "UAN Activation"
    },
  ];

  const faqs = [
    {
      question: "What documents are needed for PF withdrawal?",
      answer: "For PF withdrawal, you typically need: UAN, Aadhaar (linked with UAN), PAN card, bank account details (linked with UAN), and Form 19/10C/31 depending on your employment status. Our team will guide you through the exact requirements for your specific case."
    },
    {
      question: "Can you fix name or DOB mismatches in PF account?",
      answer: "Yes! We specialize in fixing name mismatches, DOB errors, and other KYC discrepancies in PF accounts. We handle all the paperwork and follow up with EPFO to ensure your corrections are processed smoothly."
    },
    {
      question: "How long does PF transfer take?",
      answer: "PF transfer typically takes 15-30 days once all documents are submitted correctly. However, the timeline can vary based on EPFO processing. We ensure all your documents are accurate to avoid delays and keep you updated throughout the process."
    },
    {
      question: "Do you help with complex PF issues?",
      answer: "Absolutely! We handle complex PF cases including multiple employer transfers, inactive accounts, missing contributions, inter-state transfers, and disputed claims. Our team has experience with 30,000+ cases including the most challenging ones."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
              Your Cure for PF Worries —<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fast, Transparent, Trusted
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From UAN activation and KYC updates to PF withdrawals, transfers, corrections, and loans — 
              PF Doctor handles everything smoothly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <WhatsAppButton variant="primary" size="lg" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="font-semibold">30,000+ Cases Solved</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="font-semibold">Trusted Since 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary text-xl">★</span>
                <span className="font-semibold">4.9★ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our PF Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive PF solutions for all your Provident Fund needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PF Doctor */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose PF Doctor?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for hassle-free PF solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: "Fast Processing", desc: "Quick turnaround on all PF services" },
              { icon: Shield, title: "Transparent Workflow", desc: "Complete visibility into your case status" },
              { icon: CheckCircle, title: "Verified Experts", desc: "Experienced professionals handling your PF" },
              { icon: Users, title: "End-to-End Support", desc: "From documentation to fund transfer" },
              { icon: TrendingUp, title: "Real-time Updates", desc: "Stay informed at every step" },
              { icon: FileCheck, title: "100% Compliance", desc: "All processes follow EPFO guidelines" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-card rounded-lg border border-border hover:shadow-card transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process to resolve your PF issues
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Share Your PF Issue",
                desc: "Contact us on WhatsApp and describe your PF problem. Our experts will understand your needs."
              },
              {
                step: "02",
                title: "Expert Review & Timeline",
                desc: "Our team reviews your case, verifies documents, and provides a clear timeline for resolution."
              },
              {
                step: "03",
                title: "Issue Resolved",
                desc: "We handle all paperwork and follow-ups with EPFO. You get real-time updates until completion."
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="inline-block">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <WhatsAppButton variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Track Record</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of employees across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <StatCard icon={CheckCircle} value="30,000+" label="PF Issues Solved" />
            <StatCard icon={Users} value="150+" label="Corporate Partners" />
            <StatCard icon={TrendingUp} value="4.9★" label="Customer Satisfaction" />
          </div>
        </div>
      </section>

      {/* Client Reviews Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center">
            <a href="/reviews" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
              View All Reviews
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our PF services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-12">
            <WhatsAppButton variant="primary" size="lg" text="Have More Questions? Chat Now" />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Home;
