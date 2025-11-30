import { Target, Heart, Award, Users, Shield, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EmailButton from "@/components/EmailButton";
import PF_DOCTOR_WEB from "../assets/PF_DOCTOR_WEB.png";


const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              About <span className="text-gradient">PF Doctor</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your trusted partner in navigating the complexities of Provident Fund management
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
    <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto space-y-8">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Our Story
        </h2>
      </div>

      {/* Director Block */}
      <div className="text-center mb-12">

        <h5 className="text-xl md:text-2xl font-display font-bold mb-1">
          Bhavesh Joshi
        </h5>

        <p className="text-sm text-muted-foreground">
          Director — PF Doctor
        </p>
      </div>

      {/* Story Content */}
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
        <p className="leading-relaxed">
          PF Doctor was founded in 2020 with a simple yet powerful mission: to simplify Provident Fund 
          management for every Indian employee. We recognized that millions of workers face unnecessary 
          delays, confusion, and stress when dealing with their PF accounts.
        </p>

        <p className="leading-relaxed">
          What started as a small team helping friends and family with their PF issues has grown into 
          a trusted consultancy that has successfully resolved over 70,000 PF cases. Our journey has been 
          driven by our commitment to transparency, efficiency, and customer satisfaction.
        </p>

        <p className="leading-relaxed">
          Today, we work with 150+ corporate partners and serve thousands of individual clients across 
          India. Our expertise spans every aspect of PF management, from simple UAN activations to 
          complex multi-employer transfers and disputed claims.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Mission & Values */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-xl border-2 hover:border-primary hover:shadow-glow transition-all hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto shadow-glow">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-center mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                To simplify PF management for every Indian employee by providing fast, transparent, 
                and professional services that eliminate stress and delays.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl border-2 hover:border-primary hover:shadow-glow transition-all hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-center mb-4">Transparency</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                We believe in complete transparency. You'll always know the status of your case, 
                the steps involved, and realistic timelines.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl border-2 hover:border-primary hover:shadow-glow transition-all hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto shadow-glow">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-center mb-4">Efficiency</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                We streamline processes, minimize paperwork, and leverage technology to resolve 
                your PF issues in the shortest possible time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Since 2020 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that mark our growth
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2020",
                title: "PF Doctor Founded",
                description: "Started with a vision to help employees with their PF issues"
              },
              {
                year: "2021",
                title: "5,000 Cases Milestone",
                description: "Crossed 5,000 successfully resolved PF cases"
              },
              {
                year: "2022",
                title: "Corporate Partnerships",
                description: "Began serving corporate clients with bulk PF services"
              },
              {
                year: "2023",
                title: "43,000+ Cases Solved",
                description: "Expanded team and services to handle complex PF cases"
              },
              {
                year: "2024",
                title: "70,000+ Success Stories and Still Counting",
                description: "Achieved 4+ star rating with 150+ corporate partners"
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start glass-card p-6 rounded-lg hover:shadow-glow transition-all">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                    <span className="text-white font-display font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Badge */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Award className="h-16 w-16 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">70,000+ PF Issues Solved</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every number represents a person who trusted us with their hard-earned savings. 
              This achievement motivates us to continue delivering excellence in every case we handle.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-8">
              <div className="text-center glass-card px-8 py-6 rounded-lg">
                <p className="text-4xl font-display font-bold text-primary mb-2">4+ Stars</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
              <div className="text-center glass-card px-8 py-6 rounded-lg">
                <p className="text-4xl font-display font-bold text-primary mb-2">150+</p>
                <p className="text-sm text-muted-foreground">Corporate Partners</p>
              </div>
              <div className="text-center glass-card px-8 py-6 rounded-lg">
                <p className="text-4xl font-display font-bold text-primary mb-2">70K+</p>
                <p className="text-sm text-muted-foreground">Cases Resolved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to solving your PF issues
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: "PF Experts",
                  description: "Our team consists of certified professionals with deep knowledge of EPFO processes and regulations."
                },
                {
                  icon: Heart,
                  title: "Customer-First Approach",
                  description: "Every team member is trained to prioritize your needs and provide personalized support."
                },
              ].map((item, index) => (
                <div key={index} className="glass-card p-8 rounded-xl border hover:shadow-glow transition-all hover:scale-105">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to Resolve Your PF Issues?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers who trust PF Doctor with their Provident Fund management
            </p>
            <EmailButton variant="primary" size="lg" />
          </div>
        </div>
      </section>

      <Footer />
      <EmailButton variant="floating" />
    </div>
  );
};

export default About;
