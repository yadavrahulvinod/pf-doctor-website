import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "floating";
  size?: "sm" | "default" | "lg";
  className?: string;
  text?: string;
}

const WhatsAppButton = ({ 
  variant = "primary", 
  size = "default", 
  className,
  text = "Get Instant Help Now"
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hi, I need help with my PF issue. Can you assist me?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={cn(
          "fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-white rounded-full p-4 shadow-hover transition-all hover:scale-110",
          "flex items-center justify-center group",
          className
        )}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="ml-0 max-w-0 overflow-hidden group-hover:ml-2 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
          Chat Now
        </span>
      </button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant === "primary" ? "default" : "outline"}
      size={size}
      className={cn(
        variant === "primary" && "bg-secondary hover:bg-secondary/90 text-white",
        variant === "secondary" && "border-secondary text-secondary hover:bg-secondary/10",
        "gap-2 font-semibold",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {text}
    </Button>
  );
};

export default WhatsAppButton;
