import { useMousePosition } from '@/hooks/useMousePosition';

export const HeroVisual = () => {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central neural network node */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2"
        style={{
          transform: `translate(${normalizedX * 20}px, ${normalizedY * 15}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Core orb */}
        <div className="relative">
          <div 
            className="w-64 h-64 rounded-full animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, hsl(35 90% 60% / 0.2) 0%, hsl(350 70% 55% / 0.1) 50%, transparent 70%)',
            }}
          />
          <div 
            className="absolute inset-8 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(35 90% 60% / 0.3) 0%, transparent 60%)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute inset-16 rounded-full border border-primary/30"
            style={{ animation: 'pulse-glow 2.5s ease-in-out infinite reverse' }}
          />
        </div>

        {/* Connection lines radiating out */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const length = 120 + (i % 3) * 40;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 origin-left"
              style={{
                width: `${length}px`,
                height: '1px',
                background: `linear-gradient(90deg, hsl(35 90% 60% / 0.4), transparent)`,
                transform: `rotate(${i * 45}deg)`,
                animation: `pulse-glow ${2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          );
        })}

        {/* Orbiting nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `orbit ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * -1.5}s`,
            }}
          >
            <div 
              className="rounded-full"
              style={{
                width: `${6 + i * 2}px`,
                height: `${6 + i * 2}px`,
                background: i % 2 === 0 ? 'hsl(35 90% 60% / 0.7)' : 'hsl(350 70% 55% / 0.6)',
                transform: `translateX(${100 + i * 30}px)`,
                boxShadow: i % 2 === 0 
                  ? '0 0 10px hsl(35 90% 60% / 0.5)'
                  : '0 0 10px hsl(350 70% 55% / 0.4)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating data particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: i % 3 === 0 
              ? 'hsl(35 90% 60% / 0.5)'
              : i % 3 === 1
              ? 'hsl(350 70% 55% / 0.4)'
              : 'hsl(45 100% 65% / 0.3)',
            left: `${40 + Math.random() * 55}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Binary/code streams */}
      <div className="absolute right-10 top-20 bottom-20 w-px opacity-20">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(180deg, transparent, hsl(35 90% 60%), transparent)',
            animation: 'data-stream 3s linear infinite',
          }}
        />
      </div>
      <div className="absolute right-32 top-10 bottom-10 w-px opacity-15">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(180deg, transparent, hsl(350 70% 55%), transparent)',
            animation: 'data-stream 4s linear infinite',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Ambient gradient blobs */}
      <div 
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'hsl(35 90% 60% / 0.06)',
          transform: `translate(${normalizedX * 40}px, ${normalizedY * 40}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: 'hsl(350 70% 55% / 0.05)',
          transform: `translate(${normalizedX * -30}px, ${normalizedY * -30}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      />
    </div>
  );
};