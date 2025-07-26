import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import EcoCivicZones from "@/components/EcoCivicZones";
import CorePrinciples from "@/components/CorePrinciples";
import TransformativeTools from "@/components/TransformativeTools";
import GlobalExamples from "@/components/GlobalExamples";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PillarsSection />
      <EcoCivicZones />
      <CorePrinciples />
      <TransformativeTools />
      <GlobalExamples />
      <Footer />
    </div>
  );
};

export default Index;
