import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  className?: string;
}

export const NeuralBackground = ({ className }: NeuralBackgroundProps) => {
  return (
    <div className={cn("fixed inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Soft mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      
      {/* Subtle floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: i % 2 === 0 
              ? 'hsl(35 90% 60% / 0.3)'
              : 'hsl(350 70% 55% / 0.25)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      
      {/* Warm ambient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'hsl(35 90% 60% / 0.04)' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'hsl(350 70% 55% / 0.04)', animationDelay: '1.5s' }}
      />
      <div 
        className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'hsl(45 100% 65% / 0.03)', animationDelay: '3s' }}
      />
    </div>
  );
};