import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle } from "lucide-react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  duration: string;
  items: string[];
  completed?: boolean;
}

const StepCard = ({ stepNumber, title, duration, items, completed = false }: StepCardProps) => {
  return (
    <Card className="relative overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-medical-teal"></div>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              {stepNumber}
            </div>
            <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
          </div>
          {completed && <CheckCircle className="w-5 h-5 text-green-600" />}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{duration}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default StepCard;