const TickerSection = () => {
  const tickerMessages = [
    "gm gm gm 🐕 vibes are unstable",
    "wen mint? wen moon? wen rug?",
    "only the animals know 🐸🦍🐕",
    "chaos level: MAXIMUM 🌀",
    "jungle energy: INFINITE 🌴",
    "meme density: CRITICAL 💥",
    "vibe check: PASSED ✅",
    "diamond hands only 💎🙌",
    "to the moon and beyond 🚀🌙",
    "hodl tight, it's gonna be wild 🎢"
  ];

  return (
    <section className="py-8 bg-jungle-green overflow-hidden border-y-4 border-jungle-yellow">
      <div className="relative">
        {/* Scrolling Ticker */}
        <div className="animate-scroll-ticker whitespace-nowrap">
          <div className="inline-flex items-center gap-8 text-2xl font-cartoon text-jungle-green-foreground">
            {tickerMessages.map((message, index) => (
              <div key={index} className="inline-flex items-center gap-4">
                <span>{message}</span>
                <span className="text-jungle-yellow animate-wiggle">•</span>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {tickerMessages.map((message, index) => (
              <div key={`duplicate-${index}`} className="inline-flex items-center gap-4">
                <span>{message}</span>
                <span className="text-jungle-yellow animate-wiggle">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 text-3xl animate-bounce-crazy opacity-80">
          📢
        </div>
        <div className="absolute top-0 right-0 text-3xl animate-wiggle opacity-80">
          🔊
        </div>
      </div>
    </section>
  );
};

export default TickerSection;