import treasureMapBg from "@/assets/treasure-map-bg.jpg";

const RoadmapSection = () => {
  const roadmapStages = [
    { stage: 1, emoji: "🐕", title: "Pump.fun Launch", status: "active" },
    { stage: 2, emoji: "🐸", title: "Mystery NFT Mint", status: "coming" },
    { stage: 3, emoji: "🦍", title: "?????", status: "mystery" },
    { stage: 4, emoji: "🐒", title: "????", status: "mystery" },
    { stage: 5, emoji: "🐊", title: "????", status: "mystery" },
    { stage: 6, emoji: "🐔", title: "????", status: "mystery" },
    { stage: 7, emoji: "🐍", title: "????", status: "mystery" },
    { stage: 8, emoji: "🐼", title: "????", status: "mystery" },
    { stage: 9, emoji: "🦝", title: "????", status: "mystery" },
    { stage: 10, emoji: "🦄", title: "????", status: "legendary" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${treasureMapBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-jungle opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-cartoon text-4xl sm:text-6xl text-center mb-4 text-jungle-orange text-shadow-cartoon">
          The Insane Path 🗺️
        </h2>
        <p className="font-cartoon text-xl text-center mb-12 text-muted-foreground">
          Follow the treasure map to meme greatness! 
        </p>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {roadmapStages.map((item, index) => (
            <div
              key={item.stage}
              className={`
                relative p-6 rounded-2xl border-4 transition-all duration-500 hover:scale-105
                ${item.status === "active" 
                  ? "bg-jungle-yellow border-jungle-green shadow-jungle animate-pulse-glow" 
                  : item.status === "coming"
                  ? "bg-jungle-lime border-jungle-orange shadow-meme"
                  : item.status === "legendary"
                  ? "bg-gradient-chaos border-moon-purple shadow-chaos animate-wiggle"
                  : "bg-card border-muted shadow-lg"
                }
              `}
            >
              {/* Stage Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-cartoon text-sm">
                {item.stage}
              </div>

              {/* Animal Emoji */}
              <div className={`text-6xl text-center mb-4 ${
                item.status === "active" ? "animate-bounce-crazy" :
                item.status === "legendary" ? "animate-wiggle" :
                "hover:animate-bounce-crazy"
              }`}>
                {item.emoji}
              </div>

              {/* Title */}
              <h3 className="font-cartoon text-lg text-center text-foreground mb-2">
                {item.title}
              </h3>

              {/* Status Badge */}
              <div className={`
                text-xs font-cartoon text-center px-2 py-1 rounded-full
                ${item.status === "active" 
                  ? "bg-jungle-green text-jungle-green-foreground" 
                  : item.status === "coming"
                  ? "bg-jungle-orange text-white"
                  : item.status === "legendary"
                  ? "bg-moon-purple text-white"
                  : "bg-muted text-muted-foreground"
                }
              `}>
                {item.status === "active" ? "LIVE!" :
                 item.status === "coming" ? "SOON" :
                 item.status === "legendary" ? "LEGEND" :
                 "MYSTERY"}
              </div>

              {/* Mystery Question Marks */}
              {item.status === "mystery" && (
                <div className="absolute -top-2 -right-2 text-2xl animate-wiggle">
                  ❓
                </div>
              )}

              {/* Treasure Elements */}
              {index % 3 === 0 && (
                <div className="absolute -bottom-1 -right-1 text-lg opacity-60">
                  💰
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Doodle Elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce-crazy opacity-40">
          🌴
        </div>
        <div className="absolute top-20 right-10 text-3xl animate-wiggle opacity-40">
          💎
        </div>
        <div className="absolute bottom-10 left-1/4 text-5xl animate-wiggle opacity-30">
          🍌
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;