import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = ["AI", "Web", "Mobile", "Design"];

const Categories = () => {
  const { ref: labelRef, isVisible: labelVisible } = useScrollAnimation(0.3);
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={labelRef} className={`mb-16 scroll-fade-left ${labelVisible ? 'visible' : ''}`}>
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
            Build anything
          </span>
        </div>
        
        <div 
          ref={categoriesRef} 
          className={`flex flex-wrap gap-x-8 md:gap-x-16 gap-y-4 stagger-children ${categoriesVisible ? 'visible' : ''}`}
        >
          {categories.map((category, index) => (
            <span
              key={index}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-[-0.02em] text-muted-foreground/30 hover:text-foreground transition-all duration-700 cursor-default hover:tracking-[-0.01em]"
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
