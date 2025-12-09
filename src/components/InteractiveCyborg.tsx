import { useMousePosition } from '@/hooks/useMousePosition';
import cyborgImage from '@/assets/cyborg-hero.png';

export const InteractiveCyborg = () => {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glowing halo behind cyborg */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse"
        style={{
          transform: `translate(${normalizedX * 20}px, ${normalizedY * 20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      
      {/* Secondary glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-2xl"
        style={{
          transform: `translate(${normalizedX * -15}px, ${normalizedY * -15}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      {/* Cyborg image with parallax */}
      <div
        className="relative z-10"
        style={{
          transform: `translate(${normalizedX * 30}px, ${normalizedY * 20}px) rotateY(${normalizedX * 10}deg) rotateX(${-normalizedY * 5}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <img
          src={cyborgImage}
          alt="AI Cyborg representing passion for artificial intelligence"
          className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
          style={{
            filter: `drop-shadow(0 0 30px hsl(190 100% 50% / 0.4))`,
          }}
        />
        
        {/* Scan line overlay */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
        </div>
      </div>

      {/* Floating particles around cyborg */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60 animate-float"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};
