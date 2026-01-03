import { Brain, Globe, Smartphone, Palette } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "AI",
    description: "Build intelligent solutions that learn and adapt",
  },
  {
    icon: Globe,
    title: "Web",
    description: "Create powerful web experiences and platforms",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Design apps that go anywhere with users",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Craft beautiful interfaces that inspire",
  },
];

const Categories = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Categories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What You'll Work On
          </h2>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
