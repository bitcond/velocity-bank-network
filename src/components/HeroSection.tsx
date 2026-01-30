import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-[20px]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Texas Care Shared Clinic
            <span className="block text-primary-foreground/90">Launch Plan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Step-by-Step Guide to Opening a New Clinic Location
          </p>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;