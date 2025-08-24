const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Footer Text */}
        <div className="mb-8">
          <p className="font-cartoon text-2xl sm:text-3xl mb-4 text-jungle-yellow">
            Powered by memes. Fueled by Solana.
          </p>
          <p className="font-cartoon text-xl sm:text-2xl text-jungle-lime animate-wiggle">
            The insanity never ends. 🌀
          </p>
        </div>

        {/* Disclaimer */}
        <div className="border-t-2 border-jungle-orange pt-6 mb-6">
          <p className="font-cartoon text-sm text-muted opacity-80 max-w-2xl mx-auto">
            This is a meme project for entertainment purposes. 
            Always DYOR and never invest more than you can afford to lose in the jungle! 🐒
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm font-cartoon">
          <span className="text-jungle-orange">© 2024 IVCSG</span>
          <span className="text-jungle-yellow animate-wiggle">•</span>
          <span className="text-jungle-lime">Built with insane vibes</span>
          <span className="text-jungle-yellow animate-wiggle">•</span>
          <span className="text-jungle-orange">Solana Blockchain</span>
        </div>

        {/* Fun Elements */}
        <div className="flex justify-center gap-4 mt-6 text-2xl">
          <span className="animate-bounce-crazy">🌴</span>
          <span className="animate-wiggle">🦍</span>
          <span className="animate-bounce-crazy">🐸</span>
          <span className="animate-wiggle">🐕</span>
          <span className="animate-bounce-crazy">🌀</span>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-4 left-4 text-4xl animate-wiggle opacity-20">
        💰
      </div>
      <div className="absolute top-4 right-4 text-3xl animate-bounce-crazy opacity-20">
        🚀
      </div>
      <div className="absolute bottom-4 left-1/4 text-2xl animate-wiggle opacity-20">
        💎
      </div>
      <div className="absolute bottom-4 right-1/4 text-2xl animate-bounce-crazy opacity-20">
        🍌
      </div>
    </footer>
  );
};

export default Footer;