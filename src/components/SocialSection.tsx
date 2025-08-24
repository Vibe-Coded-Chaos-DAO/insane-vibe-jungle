import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: "𝕏",
      emoji: "🐦",
      url: "#",
      bgColor: "bg-jungle-lime",
      hoverColor: "hover:bg-jungle-green"
    },
    {
      name: "Discord",
      icon: "💬", 
      emoji: "🎮",
      url: "#",
      bgColor: "bg-primary",
      hoverColor: "hover:bg-primary/80"
    },
    {
      name: "Telegram",
      icon: "✈️",
      emoji: "📱",
      url: "#",
      bgColor: "bg-jungle-orange",
      hoverColor: "hover:bg-jungle-yellow"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-chaos">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-cartoon text-4xl sm:text-6xl mb-4 text-primary-foreground text-shadow-cartoon">
          Join the Jungle! 🌴
        </h2>
        <p className="font-cartoon text-xl mb-12 text-primary-foreground/80">
          Connect with fellow degens and jungle creatures!
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Button
              key={social.name}
              asChild
              className={`
                font-cartoon text-xl px-8 py-6 rounded-2xl border-4 border-primary-foreground
                ${social.bgColor} ${social.hoverColor} text-primary-foreground
                shadow-meme hover:shadow-jungle transition-all duration-300 hover:scale-110
                animate-bounce-crazy
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <span className="text-2xl mr-2 animate-wiggle">{social.icon}</span>
                {social.name}
                <span className="text-2xl ml-2 animate-bounce-crazy">{social.emoji}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-primary-foreground/20 rounded-2xl p-6 border-2 border-jungle-yellow">
            <div className="text-4xl font-cartoon text-jungle-yellow mb-2">🦍</div>
            <div className="text-2xl font-cartoon text-primary-foreground">Coming Soon</div>
            <div className="text-sm font-cartoon text-primary-foreground/80">Wild Members</div>
          </div>
          <div className="bg-primary-foreground/20 rounded-2xl p-6 border-2 border-jungle-lime">
            <div className="text-4xl font-cartoon text-jungle-lime mb-2">🐸</div>
            <div className="text-2xl font-cartoon text-primary-foreground">∞</div>
            <div className="text-sm font-cartoon text-primary-foreground/80">Memes Created</div>
          </div>
          <div className="bg-primary-foreground/20 rounded-2xl p-6 border-2 border-jungle-orange">
            <div className="text-4xl font-cartoon text-jungle-orange mb-2">🐕</div>
            <div className="text-2xl font-cartoon text-primary-foreground">MAX</div>
            <div className="text-sm font-cartoon text-primary-foreground/80">Chaos Level</div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-3xl animate-wiggle opacity-60">
          💫
        </div>
        <div className="absolute top-20 right-10 text-4xl animate-bounce-crazy opacity-60">
          🌟
        </div>
        <div className="absolute bottom-10 left-1/4 text-2xl animate-wiggle opacity-40">
          ✨
        </div>
      </div>
    </section>
  );
};

export default SocialSection;