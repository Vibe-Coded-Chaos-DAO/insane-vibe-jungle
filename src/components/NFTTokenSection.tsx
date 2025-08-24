import { Card, CardContent } from "@/components/ui/card";
import nftCardMockup from "@/assets/nft-card-mockup.jpg";

const NFTTokenSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-degen">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cartoon text-4xl sm:text-6xl text-center mb-4 text-primary-foreground text-shadow-cartoon">
          Meme Trading Cards! 🃏
        </h2>
        <p className="font-cartoon text-xl text-center mb-12 text-primary-foreground/80">
          Collect the chaos! Trade the madness!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* NFT Card */}
          <Card className="border-4 border-jungle-yellow bg-card shadow-chaos hover:shadow-jungle transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ backgroundImage: `url(${nftCardMockup})` }}
              ></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6 animate-bounce-crazy">
                  🖼️
                </div>
                <h3 className="font-cartoon text-3xl mb-4 text-jungle-orange">
                  Future NFT Drops
                </h3>
                <div className="text-6xl font-cartoon text-destructive mb-4 animate-wiggle transform rotate-12">
                  COMING SOON!
                </div>
                <p className="font-cartoon text-lg text-muted-foreground mb-6">
                  Legendary jungle creatures awaiting their digital debut! 
                  Each NFT tells a story of meme madness! 🦍✨
                </p>
                
                {/* Features */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-jungle-green">🌟</span>
                    <span className="font-cartoon">Rare Animal Traits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-jungle-green">🎨</span>
                    <span className="font-cartoon">Hand-drawn Artwork</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-jungle-green">🎮</span>
                    <span className="font-cartoon">In-Game Utilities</span>
                  </div>
                </div>
              </div>

              {/* Graffiti Elements */}
              <div className="absolute top-4 right-4 text-2xl animate-wiggle opacity-60">
                💥
              </div>
              <div className="absolute bottom-4 left-4 text-xl animate-bounce-crazy opacity-60">
                🎪
              </div>
            </CardContent>
          </Card>

          {/* Token Card */}
          <Card className="border-4 border-jungle-lime bg-card shadow-meme hover:shadow-chaos transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-8xl mb-6 animate-wiggle">
                  🪙
                </div>
                <h3 className="font-cartoon text-3xl mb-4 text-primary">
                  Insane Vibe Tokens
                </h3>
                <div className="text-6xl font-cartoon text-destructive mb-4 animate-bounce-crazy transform -rotate-12">
                  COMING SOON!
                </div>
                <p className="font-cartoon text-lg text-muted-foreground mb-6">
                  The currency of chaos! Trade vibes, stack gains, 
                  and fuel the jungle economy! 💰🌴
                </p>
                
                {/* Token Features */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-jungle-orange">🚀</span>
                    <span className="font-cartoon">Deflationary Supply</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-jungle-orange">🎯</span>
                    <span className="font-cartoon">Staking Rewards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-jungle-orange">🏆</span>
                    <span className="font-cartoon">Governance Power</span>
                  </div>
                </div>
              </div>

              {/* Animated Elements */}
              <div className="absolute top-4 left-4 text-2xl animate-bounce-crazy opacity-60">
                ⚡
              </div>
              <div className="absolute bottom-4 right-4 text-xl animate-wiggle opacity-60">
                🔥
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Doodles */}
        <div className="flex justify-center mt-12 gap-8 text-4xl">
          <span className="animate-bounce-crazy">🎲</span>
          <span className="animate-wiggle">🎭</span>
          <span className="animate-bounce-crazy">🎨</span>
          <span className="animate-wiggle">🎪</span>
        </div>
      </div>
    </section>
  );
};

export default NFTTokenSection;