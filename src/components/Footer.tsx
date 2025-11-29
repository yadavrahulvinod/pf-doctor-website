import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import pfDoctorLogo from "@/assets/pf-doctor-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={pfDoctorLogo} 
              alt="PF Doctor Logo" 
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Your cure for PF worries. Fast, transparent, and trusted PF consultancy services since 2020.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary font-semibold">★ 4.9</span>
              <span>|</span>
              <span>30,000+ Cases Solved</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Client Reviews</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>PF Withdrawal</li>
              <li>PF Transfer</li>
              <li>UAN Activation</li>
              <li>KYC Update</li>
              <li>PF Corrections</li>
              <li>PF Loan Assistance</li>
              <li>FNF Settlement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>Thane, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@pfdoctor.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <WhatsAppButton variant="secondary" size="sm" className="w-full" />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PF Doctor. All rights reserved. | Trusted PF Consultancy Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
