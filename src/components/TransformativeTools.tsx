import { useState } from "react";
import { CreditCard, DollarSign, Users, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    id: "digital-id",
    icon: CreditCard,
    title: "Digital ID & Civic Credits",
    description: "Blockchain-based identity system that tracks community contributions and enables portable citizenship across eco-civic zones.",
    features: [
      "Decentralized identity verification",
      "Civic contribution tracking",
      "Skills and knowledge validation",
      "Cross-community recognition"
    ]
  },
  {
    id: "migration-bonds",
    icon: DollarSign,
    title: "Green Migration Bonds",
    description: "Financial instruments that fund climate-resilient infrastructure while providing pathways for climate migrants to find new homes.",
    features: [
      "Climate adaptation funding",
      "Migrant integration support",
      "Community capacity building",
      "Regenerative investment returns"
    ]
  },
  {
    id: "commons-councils",
    icon: Users,
    title: "Commons Councils",
    description: "Participatory governance bodies that manage shared resources and make collective decisions about community development.",
    features: [
      "Consensus decision-making",
      "Resource stewardship",
      "Conflict resolution",
      "Community visioning"
    ]
  },
  {
    id: "mutual-aid",
    icon: Globe,
    title: "Global Mutual Aid Networks",
    description: "Interconnected support systems that share resources, knowledge, and solidarity across bioregional boundaries.",
    features: [
      "Resource sharing protocols",
      "Knowledge exchange platforms",
      "Emergency response networks",
      "Cultural preservation initiatives"
    ]
  }
];

const TransformativeTools = () => {
  const [activeTab, setActiveTab] = useState(tools[0].id);
  const activeTool = tools.find(tool => tool.id === activeTab) || tools[0];
  const ActiveIcon = activeTool.icon;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transformative{" "}
            <span className="text-accent">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative technologies and systems that enable regenerative citizenship 
            and collaborative stewardship at scale.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left group ${
                    activeTab === tool.id
                      ? "border-accent bg-accent/10 shadow-organic"
                      : "border-border bg-card hover:border-accent/50 hover:bg-accent/5"
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 transition-colors ${
                    activeTab === tool.id ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                  }`} />
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {tool.title}
                  </h3>
                </button>
              );
            })}
          </div>
          
          {/* Active Tool Content */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-organic">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-nature rounded-xl flex items-center justify-center">
                    <ActiveIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {activeTool.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {activeTool.description}
                </p>
                
                <Button variant="nature" size="lg" className="group">
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-4">
                  Key Features
                </h4>
                <div className="space-y-3">
                  {activeTool.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformativeTools;