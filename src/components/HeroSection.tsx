import { InteractiveCyborg } from './InteractiveCyborg';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Cyborg as background element */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-full h-full max-w-4xl ml-auto">
          <InteractiveCyborg />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-sm text-primary">Available for Internship • February 2026</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">I'm </span>
              <span className="text-gradient glow-text">Ousama</span>
              <br />
              <span className="text-foreground">Hassan</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed">
              Computer Science Engineering student at <span className="text-primary font-medium">EPITA Paris</span>, 
              passionate about <span className="text-secondary font-medium">Artificial Intelligence</span> and building 
              innovative solutions that push the boundaries of technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/30 backdrop-blur-sm text-foreground font-display font-semibold text-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/30">
              <div>
                <div className="font-display text-3xl font-bold text-primary">3+</div>
                <div className="font-body text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">3</div>
                <div className="font-body text-sm text-muted-foreground">Languages</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">2026</div>
                <div className="font-body text-sm text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
};