import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-eco-civic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Where Borders End,{" "}
          <span className="bg-gradient-nature bg-clip-text text-transparent">
            Stewardship Begins
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          A unified vision for regenerative citizenship that transcends traditional boundaries 
          and creates thriving eco-civic communities worldwide.
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          className="animate-pulse hover:animate-none"
        >
          Explore Eco-Civic Zones
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-sm mt-2">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;