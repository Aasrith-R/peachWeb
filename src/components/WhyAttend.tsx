import { Rocket, Users, Zap, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Learn by building, not watching",
    description: "Hands-on experience beats passive learning every time.",
  },
  {
    icon: Users,
    title: "Collaborate with driven peers",
    description: "Meet motivated students who share your ambition.",
  },
  {
    icon: Zap,
    title: "Ship a real project in one day",
    description: "Go from idea to working prototype before dinner.",
  },
  {
    icon: Trophy,
    title: "Compete and have fun doing it",
    description: "Win prizes while building lasting memories.",
  },
];

const WhyAttend = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Why Join
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Why Attend
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex gap-6 p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
