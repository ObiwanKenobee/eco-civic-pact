import { Heart, Leaf, Building, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Belonging",
    description: "Every person has inherent worth and deserves a place to call home where they can contribute their gifts to the community.",
    color: "bg-gradient-to-br from-pink-400 to-red-500"
  },
  {
    icon: Leaf,
    title: "Nature",
    description: "We are part of the web of life. Our wellbeing is inseparable from the health of our ecosystems and bioregions.",
    color: "bg-gradient-nature"
  },
  {
    icon: Building,
    title: "State as Platform",
    description: "Governments become enabling platforms for collective action rather than controlling hierarchies.",
    color: "bg-gradient-sky"
  },
  {
    icon: Sparkles,
    title: "Healing by Design",
    description: "Our systems and spaces are designed to heal trauma, restore relationships, and regenerate life at every scale.",
    color: "bg-gradient-earth"
  }
];

const CorePrinciples = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core{" "}
            <span className="text-accent">Principles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The foundational values that guide our approach to regenerative citizenship
            and community transformation.
          </p>
        </div>
        
        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="flex-shrink-0 w-80 md:w-96 snap-center"
                >
                  <div className="bg-card border border-border rounded-2xl p-8 h-96 shadow-organic hover:shadow-earth transition-all duration-500 hover:-translate-y-2 group">
                    <div className={`w-20 h-20 ${principle.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      {principle.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {principle.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="mt-6 h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full" />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {principles.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted hover:bg-accent transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;