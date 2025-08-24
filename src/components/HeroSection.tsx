import { useState } from "react";
import { Button } from "@/components/ui/button";
import jungleHeroBanner from "@/assets/jungle-hero-banner.jpg";

const HeroSection = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      alert("Wallet connection feature coming soon! 🦍✨");
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${jungleHeroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-chaos opacity-80"></div>
      </div>

      {/* Floating Rocket Animation */}
      <div className="absolute top-1/4 left-0 w-16 h-16 animate-float-rocket z-10">
        🚀
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-bounce-crazy">
          <h1 className="font-cartoon text-5xl sm:text-6xl lg:text-8xl mb-6 text-shadow-cartoon leading-tight">
            <div className="text-jungle-yellow drop-shadow-lg">
              Insane Vibe Coded
            </div>
            <div className="text-primary drop-shadow-lg">
              Solana Game
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl text-jungle-lime animate-wiggle inline-block">
              🐸🦍🐕🌀
            </div>
          </h1>
        </div>

        <div className="mb-8 animate-pulse-glow">
          <p className="font-cartoon text-xl sm:text-2xl lg:text-3xl text-jungle-orange mb-2">
            Powered by chaos. Fueled by vibes.
          </p>
          <p className="font-cartoon text-lg sm:text-xl lg:text-2xl text-secondary">
            The jungle's most insane meme adventure! 🌴
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="font-cartoon text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-chaos border-4 border-jungle-yellow hover:border-jungle-lime transition-all duration-300 hover:scale-105"
          >
            {isConnecting ? (
              <>
                <div className="animate-spin mr-2">🌀</div>
                Connecting...
              </>
            ) : (
              <>
                <span className="mr-2">🔗</span>
                Connect Wallet
              </>
            )}
          </Button>
          
          <div className="flex gap-2 text-2xl">
            <span className="animate-bounce-crazy">💰</span>
            <span className="animate-wiggle">Phantom</span>
            <span className="animate-bounce-crazy">•</span>
            <span className="animate-wiggle">Backpack</span>
            <span className="animate-bounce-crazy">🎒</span>
          </div>
        </div>

        {/* Bouncing Animals */}
        <div className="absolute -bottom-10 left-1/4 text-6xl animate-bounce-crazy opacity-80">
          🐕
        </div>
        <div className="absolute -bottom-5 right-1/4 text-5xl animate-wiggle opacity-80">
          🐸
        </div>
        <div className="absolute -bottom-8 left-1/6 text-4xl animate-bounce-crazy opacity-60">
          🦍
        </div>
      </div>
    </section>
  );
};

export default HeroSection;