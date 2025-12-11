import { useMousePosition } from '@/hooks/useMousePosition';
import cyborgImage from '@/assets/cyborg-hero.png';

export const InteractiveCyborg = () => {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Large ambient glow - blends with background */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(35 90% 60% / 0.12) 0%, hsl(350 70% 55% / 0.06) 40%, transparent 70%)',
          transform: `translate(${normalizedX * 30}px, ${normalizedY * 30}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      
      {/* Secondary warm glow */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(350 70% 55% / 0.1) 0%, transparent 60%)',
          transform: `translate(${normalizedX * -20}px, ${normalizedY * -20}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      />

      {/* Cyborg image - blended into scene */}
      <div
        className="relative z-10"
        style={{
          transform: `translate(${normalizedX * 25}px, ${normalizedY * 15}px) rotateY(${normalizedX * 8}deg) rotateX(${-normalizedY * 4}deg)`,
          transition: 'transform 0.25s ease-out',
        }}
      >
        {/* Soft vignette behind image */}
        <div 
          className="absolute inset-0 scale-125"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, hsl(240 15% 6%) 70%)',
          }}
        />
        
        <img
          src={cyborgImage}
          alt="AI portrait representing passion for artificial intelligence"
          className="w-full max-w-xl h-auto object-contain relative z-10"
          style={{
            filter: 'drop-shadow(0 0 60px hsl(35 90% 60% / 0.25)) drop-shadow(0 0 100px hsl(350 70% 55% / 0.15))',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Soft floating orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, hsl(35 90% 60% / 0.6), transparent)'
              : 'radial-gradient(circle, hsl(350 70% 55% / 0.5), transparent)',
            left: `${25 + Math.random() * 50}%`,
            top: `${20 + Math.random() * 50}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};