import { Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialCard from "@/components/TestimonialCard";

const Reviews = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "PF Doctor helped me withdraw my PF within 10 days when I was stuck for months. The team kept me updated at every step and handled all the paperwork. Professional and transparent service!",
      service: "PF Withdrawal"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "My name was misspelled in my PF account and my claims kept getting rejected. PF Doctor fixed it quickly and I finally got my withdrawal approved. Thank you so much!",
      service: "KYC Update"
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "I had PF accounts with 3 different employers and didn't know how to consolidate them. PF Doctor transferred everything smoothly to my current account. Very knowledgeable team!",
      service: "PF Transfer"
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      text: "Got my UAN activated and linked all my previous PF accounts in just one week. The WhatsApp support was super helpful and they explained everything clearly. Highly recommended!",
      service: "UAN Activation"
    },
    {
      name: "Vikram Singh",
      rating: 5,
      text: "My DOB was wrong in my PF records which was causing issues. PF Doctor submitted the correction with proper documents and followed up until it was fixed. Great service!",
      service: "PF Account Correction"
    },
    {
      name: "Anita Desai",
      rating: 5,
      text: "Needed PF advance for my daughter's education. PF Doctor helped me apply correctly and I got the amount within 15 days. Very grateful for their help!",
      service: "PF Loan Assistance"
    },
    {
      name: "Ravi Verma",
      rating: 5,
      text: "My employer was not releasing my FNF settlement. PF Doctor coordinated with them and ensured I got all my dues including PF and gratuity. Excellent work!",
      service: "FNF Settlement"
    },
    {
      name: "Kavita Nair",
      rating: 5,
      text: "Had a complex inter-state PF transfer issue that was pending for over a year. PF Doctor resolved it in 45 days! Their expertise in handling tough cases is impressive.",
      service: "Complex Case Resolution"
    },
    {
      name: "Suresh Iyer",
      rating: 5,
      text: "Very professional team. They explained the entire PF withdrawal process, required documents, and realistic timeline upfront. No hidden surprises, just honest service.",
      service: "PF Withdrawal"
    },
    {
      name: "Neha Gupta",
      rating: 5,
      text: "My PAN card was not linked with my UAN and I couldn't do it myself online. PF Doctor did it for me and also updated my other KYC details. Smooth experience!",
      service: "KYC Update"
    },
    {
      name: "Manoj Joshi",
      rating: 5,
      text: "Changed 4 jobs in 10 years and had separate PF accounts everywhere. PF Doctor consolidated everything into one account. Now I can track all my PF easily. Thank you!",
      service: "PF Transfer"
    },
    {
      name: "Deepa Menon",
      rating: 5,
      text: "Was confused about Form 19 vs Form 31 for PF withdrawal. The team explained everything clearly, filled the right form, and got my money within 2 weeks. Excellent guidance!",
      service: "PF Withdrawal"
    },
    {
      name: "Arjun Rao",
      rating: 5,
      text: "My previous employer was not approving my PF claim. PF Doctor handled everything - contacted the employer, EPFO, and got my withdrawal approved. Really impressed!",
      service: "Complex Case Resolution"
    },
    {
      name: "Pooja Shah",
      rating: 5,
      text: "Needed medical advance from PF urgently. PF Doctor expedited the process and I received the amount in 10 days. Their quick action helped me a lot during emergency.",
      service: "PF Loan Assistance"
    },
    {
      name: "Sanjay Malhotra",
      rating: 5,
      text: "Father's name was incorrect in my PF account causing mismatch with Aadhaar. PF Doctor corrected it with proper documentation. Now my account is claim-ready. Great job!",
      service: "PF Account Correction"
    },
    {
      name: "Meera Krishnan",
      rating: 5,
      text: "The WhatsApp support is amazing! They respond quickly, answer all questions patiently, and keep you updated throughout. Made the whole PF process stress-free for me.",
      service: "UAN Activation"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Client <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real stories from satisfied customers who trusted PF Doctor
            </p>
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-2xl font-display font-bold text-foreground">4.9</span>
              <span className="text-muted-foreground">out of 5</span>
            </div>
            <p className="text-sm text-muted-foreground">Based on 30,000+ satisfied customers</p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Real Stories of PF Issues Solved</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read what our clients have to say about their experience with PF Doctor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-5xl font-display font-bold text-primary">30K+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-display font-bold text-secondary">4.9★</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-display font-bold text-primary">98%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Verified Customer Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Screenshots of actual reviews from our satisfied clients
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border-2 border-dashed border-border">
              <div className="text-center space-y-4">
                <Quote className="h-12 w-12 text-primary mx-auto" />
                <p className="text-lg text-muted-foreground italic">
                  "We maintain transparency and authenticity. All our reviews come from real customers who have used our services."
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact us on WhatsApp to see more customer screenshots and success stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Join 30,000+ Satisfied Customers</h2>
            <p className="text-lg text-muted-foreground">
              Experience the same professional, transparent, and efficient PF service that our clients love
            </p>
            <WhatsAppButton variant="primary" size="lg" text="Get Instant Help Now" />
            <p className="text-sm text-muted-foreground">
              Fast response • Transparent process • 4.9★ rated service
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Reviews;
