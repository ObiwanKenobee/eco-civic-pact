import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Movement
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Be part of creating regenerative communities that heal our planet 
            and nurture human potential. Every step toward stewardship matters.
          </p>
          
          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-12 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h4 className="font-semibold mb-3">Get Involved</h4>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Join Community
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-3">Learn More</h4>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Resource Hub
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-3">Start a Zone</h4>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Implementation Guide
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Regenerative Citizenship Ecosystem. 
              Building bridges between humanity and nature.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;