import HeroSection from "@/components/HeroSection";
import RoadmapSection from "@/components/RoadmapSection";
import NFTTokenSection from "@/components/NFTTokenSection";
import TickerSection from "@/components/TickerSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import FloatingRocket from "@/components/FloatingRocket";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-jungle">
      {/* Floating Rocket Animation */}
      <FloatingRocket />
      
      {/* Main Sections */}
      <HeroSection />
      
      <TickerSection />
      
      <RoadmapSection />
      
      <NFTTokenSection />
      
      <SocialSection />
      
      <Footer />
    </div>
  );
};

export default Index;