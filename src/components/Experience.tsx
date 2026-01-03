import { Sparkles, Heart, Lightbulb } from "lucide-react";

const vibes = [
  {
    icon: Sparkles,
    title: "Collaborative",
    description: "Work alongside students who share your drive to create something meaningful.",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    description: "No wrong ideas—experiment freely and push the boundaries of what's possible.",
  },
  {
    icon: Heart,
    title: "Welcoming",
    description: "First hackathon? Perfect. We're here to help you succeed, not judge you.",
  },
];

const Experience = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            The Vibe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Experience & Atmosphere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast-paced but supportive. Ambitious but accessible.
          </p>
        </div>

        {/* Vibe cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vibes.map((vibe, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl bg-gradient-to-b from-secondary/50 to-card border border-border hover:border-primary/20 transition-all duration-500"
            >
              {/* Large icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <vibe.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{vibe.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {vibe.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
