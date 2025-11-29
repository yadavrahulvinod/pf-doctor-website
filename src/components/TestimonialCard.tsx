import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard = ({ name, rating, text, service }: TestimonialCardProps) => {
  return (
    <Card className="border-2 hover:shadow-card transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-secondary text-secondary" : "text-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{text}</p>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{service}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
