import { CheckCircle, Users, Clock, Shield, TrendingUp, FileCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EmailButton from "@/components/EmailButton";
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
      rating: 4.5,
      text: "My name was misspelled in my PF account. PF Doctor fixed it quickly and kept me updated throughout the process.",
      service: "KYC Update"
    },
    {
      name: "Amit Patel",
      rating: 4,
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight animate-slide-up">
              Your Cure for PF Worries <br />
              <span className="text-gradient">
                Fast - Transparent - Trusted
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From UAN activation and KYC updates to PF withdrawals, transfers, corrections, and loans — 
              PF Doctor handles everything smoothly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <EmailButton variant="primary" size="lg" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="font-semibold">70,000+ Cases Solved</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="font-semibold">Trusted Since 2020</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <span className="text-secondary text-xl">★</span>
                <span className="font-semibold">4+ Stars Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
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
      <section className="py-20 gradient-dark">
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
              <div key={index} className="flex gap-4 p-6 glass-card rounded-lg hover:shadow-glow transition-all hover:scale-105">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shadow-glow">
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
      <section className="py-20">
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
                desc: "Email us and describe your PF problem. Our experts will understand your needs and respond quickly."
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
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-display font-bold text-xl shadow-glow">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <EmailButton variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Track Record</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of employees across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <StatCard icon={CheckCircle} value="70,000+" label="PF Issues Solved" />
            <StatCard icon={Users} value="150+" label="Corporate Partners" />
            <StatCard icon={TrendingUp} value="4+ Stars" label="Customer Satisfaction" />
          </div>
        </div>
      </section>

      {/* Client Reviews Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from satisfied customers
            </p>
            <p className="text-sm text-primary font-semibold mt-2">
              Average Rating: 4+ Stars | Based on 70,000+ cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center">
            <a href="/reviews" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-all hover:gap-3">
              View All Reviews
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 gradient-dark">
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
                <AccordionItem key={index} value={`item-${index}`} className="glass-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors">
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
            <EmailButton variant="primary" size="lg" text="Get a faster response – WhatsApp us now.
" />
          </div>
        </div>
      </section>

      <Footer />
      <EmailButton variant="floating" />
    </div>
  );
};

export default Home;
