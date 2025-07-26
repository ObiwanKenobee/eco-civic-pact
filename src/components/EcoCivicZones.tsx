import { ArrowRight, Home, Sprout, Heart, Lightbulb, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const EcoCivicZones = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Eco-Civic{" "}
              <span className="text-accent">Zones</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Regenerative communities where stewardship meets citizenship. 
              These bioregional hubs demonstrate how we can live in harmony 
              with both nature and each other.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Community Work → Residency</h3>
                  <p className="text-muted-foreground">Earn citizenship through ecological restoration and community service projects.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-earth rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cooperative Networks</h3>
                  <p className="text-muted-foreground">Worker-owned enterprises and shared resource systems support local resilience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-sky rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Innovation Hubs</h3>
                  <p className="text-muted-foreground">Centers for regenerative technology, permaculture design, and social innovation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Wildlife Corridors</h3>
                  <p className="text-muted-foreground">Integrated habitat restoration connects human settlements with natural ecosystems.</p>
                </div>
              </div>
            </div>
            
            <Button variant="nature" size="lg" className="mt-8 group">
              Learn About Zones
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Illustration Placeholder */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 h-96 flex items-center justify-center shadow-earth">
              <div className="text-center text-white">
                <TreePine className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-semibold mb-2">Regenerative Community</h3>
                <p className="text-white/80">
                  Visualization of an integrated eco-civic zone with sustainable 
                  architecture, community gardens, and wildlife corridors.
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-sun rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-water rounded-full opacity-60 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoCivicZones;