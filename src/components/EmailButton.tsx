import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


interface EmailButtonProps {
  variant?: "primary" | "secondary" | "floating" | "contact";
  size?: "sm" | "default" | "lg";
  className?: string;
  text?: string;
  emailData?: {
    name?: string;
    phone?: string;
    UAN?: string;
    pfIssue?: string;
  };
}

const EmailButton = ({
  variant = "primary",
  size = "default",
  className,
  text = "Email Us Now for Assistance",
  emailData,
}: EmailButtonProps) => {
 
  // ================= HANDLERS =================
  const handleEmailClick = () => {
    const to ="info@pfdoctor.in" ;
    const subject = encodeURIComponent("PF Assistance Request");
    const body = emailData
      ? encodeURIComponent(`
Hello PF Doctor Team,

I need assistance with my PF issue.

Details:
Name: ${emailData.name || ""}
Phone: ${emailData.phone || ""}

UAN: ${emailData.UAN || ""}
Problem: ${emailData.pfIssue || ""}

Thank you.
`)
      : encodeURIComponent(`
Hello PF Doctor Team,

I need assistance with my PF issue.

Details:
Name:
Phone:
UAN:
Problem:

Thank you.
`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    const newWindow = window.open(gmailUrl, "_blank");
    if (!newWindow) {
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }
  };

  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918591875557";
    const message = encodeURIComponent("Hi, I need help with my PF issue.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // ================= JSX RETURN =================
  if (variant === "floating") {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={cn(
          "fixed bottom-5 right-5 z-50 bg-gradient-to-br from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 text-white rounded-full p-2.5 shadow-lg transition-all hover:scale-105",
          "flex items-center justify-center group animate-scale-in",
          className
        )}
        aria-label="WhatsApp Us"
      >
        <div className="bg-white/15 backdrop-blur-md p-2.5 rounded-full flex items-center justify-center border border-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-4 w-4 text-white"
            fill="currentColor"
          >
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.8.73 5.48 2.12 7.83L.5 31.5l7.9-2.07A15.45 15.45 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm7.96 22.05c-.33.93-1.6 1.74-2.66 1.97-.72.15-1.66.27-4.81-1.04-4.03-1.68-6.64-5.8-6.85-6.08-.2-.28-1.64-2.19-1.64-4.18s1.04-2.97 1.4-3.38c.37-.42.82-.53 1.09-.53.28 0 .55 0 .79.01.26.01.6-.1.93.71.33.83 1.13 2.87 1.23 3.07.1.21.17.46.04.74-.12.28-.18.45-.36.68-.18.22-.37.5-.52.67-.18.22-.36.46-.16.83.21.36.91 1.5 1.95 2.43 1.34 1.2 2.48 1.58 2.84 1.76.36.18.57.15.77-.09.21-.24.89-1.04 1.13-1.4.24-.36.49-.3.82-.18.34.12 2.15 1.02 2.51 1.2.36.18.6.27.69.42.09.15.09.86-.24 1.79z" />
          </svg>
        </div>
        <span className="ml-0 max-w-0 overflow-hidden group-hover:ml-2 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
          WhatsApp Us
        </span>
      </button>
    );
  }

  if (variant === "contact") {
    return (
      <Button
        onClick={handleContactRedirect}
        size={size}
        className={cn(
          "gap-2 font-semibold bg-gradient-to-r from-primary to-indigo-600 text-white hover:scale-105 transition-all",
          className
        )}
      >
        <Mail className="h-4 w-4" />
        Go To Contact Page
      </Button>
    );
  }

  return (
    <Button
      onClick={handleEmailClick}
      variant={variant === "primary" ? "default" : "outline"}
      size={size}
      className={cn(
        "gap-2 font-semibold transition-all hover:scale-105",
        className
      )}
    >
      <Mail className="h-4 w-4" />
      {text}
    </Button>
  );
};

export default EmailButton;
