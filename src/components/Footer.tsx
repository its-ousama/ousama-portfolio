import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-xl font-bold text-gradient">
            OH<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <span>© 2024 Ousama Hassan. Built with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>and AI passion</span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            {['About', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
