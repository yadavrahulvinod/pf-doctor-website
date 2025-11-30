import { FileText, ArrowRightLeft, UserCheck, Edit3, AlertCircle, Coins, Briefcase, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EmailButton from "@/components/EmailButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "PF Withdrawal Assistance",
      description: "Quick and hassle-free PF withdrawal when you need your funds urgently.",
      problems: [
        "Withdrawal claims getting rejected",
        "Don't know which form to use (Form 19 vs Form 31)",
        "Aadhaar or bank account not linked with UAN",
        "Employer not approving withdrawal claims"
      ],
      solution: "We handle the entire withdrawal process from documentation to fund transfer. Our experts ensure all forms are filled correctly and follow up with EPFO until your money reaches your account.",
      documents: [
        "UAN number",
        "Aadhaar card (linked with UAN)",
        "PAN card",
        "Bank account details (linked with UAN)",
        "Form 19/31 (we'll help you fill)"
      ]
    },
    {
      icon: ArrowRightLeft,
      title: "PF Transfer Assistance",
      description: "Seamless transfer of your PF balance from previous employers to current account.",
      problems: [
        "Multiple PF accounts from different employers",
        "Can't consolidate old PF accounts",
        "Transfer requests stuck for months",
        "Different UAN numbers causing confusion"
      ],
      solution: "We consolidate all your PF accounts into one through proper transfer processes. Whether it's one previous employer or multiple, we handle inter-state and intra-state transfers efficiently.",
      documents: [
        "Current UAN number",
        "Previous employer details",
        "Previous UAN(s) if different",
        "Aadhaar and PAN card",
        "Employment proof (offer letter/salary slip)"
      ]
    },
    {
      icon: UserCheck,
      title: "UAN Activation",
      description: "Get your Universal Account Number (UAN) activated and accessible.",
      problems: [
        "Never received UAN from employer",
        "UAN exists but password not set",
        "Can't access EPFO portal",
        "Don't know how to check PF balance"
      ],
      solution: "We help you generate or retrieve your UAN, activate it on the EPFO portal, and set up online access so you can track your PF balance and make claims independently.",
      documents: [
        "Aadhaar card",
        "PAN card",
        "Mobile number",
        "Previous employer details (if any)",
        "Bank account details"
      ]
    },
    {
      icon: Edit3,
      title: "KYC Update (Name, DOB, PAN mismatch)",
      description: "Fix incorrect details in your PF account to avoid claim rejections.",
      problems: [
        "Name spelling mismatch with Aadhaar/PAN",
        "Wrong date of birth in PF records",
        "PAN not linked or incorrect",
        "Can't update KYC details online"
      ],
      solution: "We submit correction requests to EPFO with proper supporting documents. Our team follows up regularly to ensure your KYC is updated correctly and your account becomes claim-ready.",
      documents: [
        "UAN number",
        "Correct Aadhaar card",
        "Correct PAN card",
        "Birth certificate (for DOB correction)",
        "Passport (if available, for name proof)"
      ]
    },
    {
      icon: AlertCircle,
      title: "PF Account Correction",
      description: "Resolve complex account issues and discrepancies in PF records.",
      problems: [
        "Multiple UAN accounts with same Aadhaar",
        "Employer uploaded wrong contribution amount",
        "Name or father's name mismatch",
        "Missing PF contributions from employer"
      ],
      solution: "We investigate the root cause of account issues and submit detailed correction requests with evidence. Complex cases involving multiple employers or disputed contributions are our specialty.",
      documents: [
        "All UAN numbers involved",
        "Employment proof from all employers",
        "Salary slips showing PF deduction",
        "Previous correspondence with EPFO (if any)",
        "Any other relevant proof"
      ]
    },
    {
      icon: Coins,
      title: "PF Loan Assistance",
      description: "Help with PF advance applications for emergencies and major expenses.",
      problems: [
        "Don't know if eligible for PF advance",
        "Advance application getting rejected",
        "Need funds for medical/education/housing",
        "Confused about withdrawal vs advance"
      ],
      solution: "We assess your eligibility for PF advance/loan and help you apply correctly. Whether it's for medical emergency, education, housing, or other approved purposes, we guide you through the entire process.",
      documents: [
        "UAN and Aadhaar (linked)",
        "Purpose-specific documents (medical bills/admission letter/house agreement)",
        "Bank account details",
        "Employer attestation (we'll coordinate)",
        "Form 31 for advance"
      ]
    },
    {
      icon: Briefcase,
      title: "FNF Claim Support",
      description: "Ensure you receive Full and Final settlement when changing jobs or retiring.",
      problems: [
        "Employer not releasing FNF amount",
        "Confusion about what's included in FNF",
        "Gratuity calculation disputes",
        "PF dues pending in FNF settlement"
      ],
      solution: "We help you understand your FNF entitlements, coordinate with your employer, and ensure all dues including PF, gratuity, and pending salary are settled correctly and on time.",
      documents: [
        "Resignation letter and acceptance",
        "Last working day details",
        "Salary slips (last 6 months)",
        "UAN and bank details",
        "Any pending leave/bonus records"
      ]
    },
    {
      icon: CheckCircle,
      title: "Complex PF Case Resolution",
      description: "Expert handling of complicated PF situations that need special attention.",
      problems: [
        "Claim rejected multiple times",
        "Inter-state PF transfer issues",
        "Employer closed/not responding",
        "Disputed PF contributions or calculations"
      ],
      solution: "Our experienced team specializes in resolving the toughest PF cases. We work directly with EPFO offices, submit grievances, and pursue your case until it's resolved satisfactorily.",
      documents: [
        "All previous correspondence",
        "Rejection letters (if any)",
        "Complete employment history",
        "Any legal notices or communications",
        "All relevant proofs and documents"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-gradient">PF Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions for all your Provident Fund needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="glass-card border-2 hover:shadow-glow transition-all hover:scale-[1.02]">
                <CardHeader className="border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-glow">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-display mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  {/* Common Problems */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                      Common Problems People Face
                    </h4>
                    <ul className="space-y-2 ml-7">
                      {service.problems.map((problem, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We Solve */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      How PF Doctor Solves It
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-7">
                      {service.solution}
                    </p>
                  </div>

                  {/* Documents Required */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Documents Required
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-7">
                      {service.documents.map((doc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border">
                    <EmailButton 
                      variant="secondary" 
                      size="default"
                      text={`Get Help with ${service.title}`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Don't See Your PF Issue Listed?</h2>
            <p className="text-lg text-muted-foreground">
              We handle all types of PF cases, including complex and unique situations. 
              Contact us and our experts will find a solution for you.
            </p>
            <EmailButton variant="primary" size="lg" text="Discuss Your PF Issue Now" />
          </div>
        </div>
      </section>

      <Footer />
      <EmailButton variant="floating" />
    </div>
  );
};

export default Services;
