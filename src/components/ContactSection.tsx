import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ousama.hassan@epita.fr', href: 'mailto:ousama.hassan@epita.fr' },
    { icon: Phone, label: 'Phone', value: '+33 7 58 67 34 69', href: 'tel:+33758673469' },
    { icon: MapPin, label: 'Location', value: 'Vitry-Sur-Seine, France', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/ousama-hassan-epita178/' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="font-body text-xs text-primary uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for a 6-month internship starting February 2026. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">Get in Touch</h3>
            <p className="font-body text-muted-foreground">
              I'm always open to discussing new opportunities, innovative projects, or ways to contribute to your organization.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl card-glass border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="font-body text-xs text-muted-foreground">{info.label}</div>
                    <div className="font-body text-sm font-medium text-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl card-glass border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-body text-sm text-foreground placeholder:text-muted-foreground transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-body text-sm text-foreground placeholder:text-muted-foreground transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-body text-sm text-foreground placeholder:text-muted-foreground transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
