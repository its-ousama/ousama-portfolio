import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'FROG XVI',
    role: 'Hospitality Team Member',
    period: 'December 2024 - Present',
    location: 'Paris, France',
    description: 'Managing orders, preparing cocktails, and maintaining professional hospitality standards in a dynamic environment.',
  },
  {
    type: 'work',
    title: 'Mercure Voyages',
    role: 'Web Development Intern',
    period: 'July 2024 - August 2024',
    location: 'Paris, France',
    description: 'Maintained and updated the company website, fixed bugs, and ensured a seamless user experience for customers.',
  },
];

const education = [
  {
    type: 'education',
    title: 'EPITA Paris',
    role: "Bachelor's in Computer Science & Engineering",
    period: '2023 - 2026',
    location: 'Paris, France',
    description: 'Studying computer science with focus on software engineering, algorithms, and AI technologies.',
  },
];

const TimelineItem = ({ item, index, isLeft }: { item: typeof experiences[0]; index: number; isLeft: boolean }) => {
  const Icon = item.type === 'work' ? Briefcase : GraduationCap;
  
  return (
    <div className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div 
          className="p-6 rounded-2xl card-glass border border-border/50 hover:border-primary/30 transition-all"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="px-2 py-1 rounded text-xs font-body bg-primary/10 text-primary">
              {item.period}
            </span>
          </div>
          <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
          <p className="font-body text-sm font-medium text-primary mb-1">{item.role}</p>
          <p className="font-body text-xs text-muted-foreground mb-3">{item.location}</p>
          <p className="font-body text-sm text-muted-foreground">{item.description}</p>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 relative">
          <Icon size={20} className="text-primary" />
        </div>
      </div>

      {/* Empty space for alignment */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
};

export const ExperienceSection = () => {
  const allItems = [
    ...experiences.map(e => ({ ...e, category: 'work' as const })),
    ...education.map(e => ({ ...e, category: 'education' as const })),
  ].sort((a, b) => {
    // Sort by most recent first
    const aYear = parseInt(a.period.match(/\d{4}/)?.[0] || '0');
    const bYear = parseInt(b.period.match(/\d{4}/)?.[0] || '0');
    return bYear - aYear;
  });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="font-body text-xs text-primary uppercase tracking-wider">Journey</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background that shaped my skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden lg:block" />

          <div className="space-y-8">
            {allItems.map((item, index) => (
              <TimelineItem key={item.title + item.period} item={item} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
