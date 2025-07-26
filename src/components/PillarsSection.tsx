import { Heart, Users, TreePine, Palette, Scale, CircleDollarSign, GraduationCap } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Humanity",
    description: "Foster dignity and well-being through compassionate community care systems.",
    action: "Care",
    impact: "Universal dignity"
  },
  {
    icon: Users,
    title: "Community", 
    description: "Build participatory governance through commons councils and collective decision-making.",
    action: "Collaborate",
    impact: "Shared prosperity"
  },
  {
    icon: TreePine,
    title: "Ecology",
    description: "Restore ecosystems through regenerative practices and bioregional stewardship.",
    action: "Regenerate", 
    impact: "Planetary healing"
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Unleash human potential through arts, innovation, and cultural expression.",
    action: "Create",
    impact: "Cultural renaissance"
  },
  {
    icon: Scale,
    title: "Governance",
    description: "Transform institutions into platforms for collective flourishing and justice.",
    action: "Govern",
    impact: "Just institutions"
  },
  {
    icon: CircleDollarSign,
    title: "Economics",
    description: "Develop regenerative economies based on mutual aid and commons stewardship.",
    action: "Exchange",
    impact: "Circular abundance"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Cultivate wisdom through lifelong learning and place-based knowledge systems.",
    action: "Learn",
    impact: "Conscious evolution"
  }
];

const PillarsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seven Pillars of{" "}
            <span className="text-accent">Regeneration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A holistic framework for creating thriving communities that honor 
            both human potential and planetary boundaries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group bg-card border border-border rounded-lg p-6 shadow-organic hover:shadow-earth transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-nature rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {pillar.title}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-accent">Action:</span>
                    <span className="text-sm text-muted-foreground">{pillar.action}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-leaf">Impact:</span>
                    <span className="text-sm text-muted-foreground">{pillar.impact}</span>
                  </div>
                  
                  <p className="text-sm text-card-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;