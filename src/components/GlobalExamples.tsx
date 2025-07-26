import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const examples = [
  {
    location: "Kenya",
    title: "Green Belt Movement",
    description: "Community-led reforestation and women's empowerment initiatives that have planted over 50 million trees while creating economic opportunities.",
    coordinates: { lat: -1.2921, lng: 36.8219 },
    impact: "50M+ trees planted",
    focus: "Ecological restoration"
  },
  {
    location: "Colombia", 
    title: "Peace Territories",
    description: "Former conflict zones transformed into regenerative communities through land redistribution, cooperative farming, and restorative justice.",
    coordinates: { lat: 4.7110, lng: -74.0721 },
    impact: "100K+ beneficiaries",
    focus: "Post-conflict healing"
  },
  {
    location: "Nepal",
    title: "Community Forest Networks",
    description: "Indigenous forest management systems that combine traditional knowledge with modern conservation science to protect biodiversity.",
    coordinates: { lat: 28.3949, lng: 84.1240 },
    impact: "2M hectares protected",
    focus: "Indigenous stewardship"
  },
  {
    location: "Oregon, USA",
    title: "Cascadia Bioregion",
    description: "Cross-border bioregional networks promoting salmon restoration, indigenous sovereignty, and sustainable cities along the Pacific coast.",
    coordinates: { lat: 45.5152, lng: -122.6784 },
    impact: "3-state collaboration",
    focus: "Bioregional governance"
  }
];

const GlobalExamples = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global{" "}
            <span className="text-accent">Examples</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world initiatives that demonstrate regenerative citizenship 
            principles in action across diverse landscapes and cultures.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <div className="bg-gradient-sky rounded-2xl p-8 mb-12 h-96 flex items-center justify-center shadow-earth relative overflow-hidden">
            <div className="text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-semibold mb-2">Interactive World Map</h3>
              <p className="text-white/80 max-w-md">
                Explore regenerative citizenship initiatives happening around the world. 
                Click pins to learn about local innovations.
              </p>
            </div>
            
            {/* Floating Map Pins */}
            {examples.map((example, index) => (
              <div
                key={example.location}
                className="absolute w-4 h-4 bg-sun rounded-full animate-pulse opacity-80"
                style={{
                  left: `${20 + (index * 20)}%`,
                  top: `${30 + (index % 2 * 20)}%`,
                  animationDelay: `${index * 500}ms`
                }}
              />
            ))}
          </div>
          
          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <div
                key={example.location}
                className="bg-card border border-border rounded-xl p-6 shadow-organic hover:shadow-earth transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground">{example.location}</h3>
                      <span className="text-sm text-accent font-medium">{example.focus}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                
                <h4 className="text-lg font-semibold text-card-foreground mb-3">
                  {example.title}
                </h4>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {example.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {example.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExamples;