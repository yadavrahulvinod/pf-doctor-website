import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmailButtonProps {
  variant?: "primary" | "secondary" | "floating";
  size?: "sm" | "default" | "lg";
  className?: string;
  text?: string;
}

const EmailButton = ({ 
  variant = "primary", 
  size = "default", 
  className,
  text = "Email Us Now for Assistance"
}: EmailButtonProps) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@pfdoctor.in?subject=PF%20Assistance%20Request&body=Hi,%20I%20need%20help%20with%20my%20PF%20issue.";
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleEmailClick}
        className={cn(
          "fixed bottom-6 right-6 z-50 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-full p-4 shadow-hover transition-all hover:scale-110",
          "flex items-center justify-center group animate-scale-in",
          className
        )}
        aria-label="Email Us"
      >
        <Mail className="h-6 w-6" />
        <span className="ml-0 max-w-0 overflow-hidden group-hover:ml-2 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
          Email Us
        </span>
      </button>
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
