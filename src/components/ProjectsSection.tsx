import { ExternalLink, Github, Bot, ShoppingBag, Calculator } from 'lucide-react';

const projects = [
  {
    title: 'Finance Coach Chatbot',
    description: 'AI-powered financial management app with React frontend, Node.js backend, MongoDB database, and OpenAI integration. Features transaction tracking, secure JWT authentication, and intelligent chatbot for personalized financial advice.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'JWT'],
    icon: Bot,
    gradient: 'from-primary to-secondary',
    featured: true,
  },
  {
    title: 'Shoe Parallaz',
    description: 'Modern e-commerce landing page built with React, TypeScript, and Tailwind CSS. Showcases product displays with smooth animations and responsive design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Animations'],
    icon: ShoppingBag,
    gradient: 'from-secondary to-primary',
  },
  {
    title: 'Math Wars Android',
    description: 'Fast-paced educational quiz game developed in Java with Android SDK. Features three progressive difficulty levels and a timed 10-second challenge system with persistent score tracking.',
    tech: ['Java', 'Android SDK', 'SQLite', 'Game Dev'],
    icon: Calculator,
    gradient: 'from-accent to-primary',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="font-body text-xs text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, AI integration, and mobile development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden card-glass border border-border/50 hover:border-primary/50 transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6 space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-primary-foreground`}>
                  <project.icon size={24} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-body bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <button className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
