import profileImage from '@/assets/profile.jpg';
import { Code, Brain, Globe, Gamepad2 } from 'lucide-react';

const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'PHP', 'HTML/CSS'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'Android SDK'] },
  { category: 'Databases', items: ['SQL', 'NoSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Linux', 'Cisco', 'GNS3', 'Jira'] },
];

const interests = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Code, label: 'Web Development' },
  { icon: Globe, label: 'Languages' },
  { icon: Gamepad2, label: 'Football & Fitness' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image and decorative elements */}
          <div className="relative">
            <div className="relative z-10 max-w-md mx-auto">
              {/* Profile image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden glow-border">
                <img
                  src={profileImage}
                  alt="Ousama Hassan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg bg-card border border-border card-glass">
                <div className="font-display text-sm font-bold text-primary">EPITA</div>
                <div className="font-body text-xs text-muted-foreground">2023-2026</div>
              </div>
            </div>
            
            {/* Decorative circuit lines */}
            <div className="absolute -inset-8 circuit-lines opacity-20 rounded-3xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <span className="font-body text-xs text-primary uppercase tracking-wider">About Me</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Engineering the <span className="text-gradient">Future</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science student at EPITA Paris, pursuing a Bachelor's in Science and Engineering. 
                My passion lies at the intersection of AI and software development, where I strive to create 
                intelligent solutions that make a real impact.
              </p>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <interest.icon size={20} />
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{interest.label}</span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.category} className="space-y-2">
                    <div className="font-body text-sm font-medium text-primary">{skill.category}</div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 rounded text-xs font-body bg-muted text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="flex gap-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-body text-sm text-muted-foreground">Arabic (Native)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <span className="font-body text-sm text-muted-foreground">English (Fluent)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="font-body text-sm text-muted-foreground">French (Intermediate)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
