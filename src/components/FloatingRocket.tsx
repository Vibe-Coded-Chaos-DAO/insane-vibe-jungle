import { useEffect, useState } from "react";
import flyingRocket from "@/assets/flying-rocket.png";

const FloatingRocket = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRocket = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 12000); // Duration of the animation
    };

    // Show rocket initially after 3 seconds
    const initialTimeout = setTimeout(showRocket, 3000);

    // Then show it randomly every 15-30 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 15000 + 15000; // 15-30 seconds
      setTimeout(showRocket, randomDelay);
    }, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/4 left-0 w-24 h-16 animate-float-rocket z-50 pointer-events-none">
      <img 
        src={flyingRocket} 
        alt="Flying rocket with meme animals"
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </div>
  );
};

export default FloatingRocket;