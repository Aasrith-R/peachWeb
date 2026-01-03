const categories = ["AI", "Web", "Mobile", "Design"];

const Categories = () => {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
            Build anything
          </span>
        </div>
        
        <div className="flex flex-wrap gap-x-8 md:gap-x-16 gap-y-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-[-0.02em] text-muted-foreground/40 hover:text-foreground transition-colors duration-500 cursor-default"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
