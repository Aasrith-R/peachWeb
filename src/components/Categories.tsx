import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = ["AI", "Web", "Mobile", "Design"];

const Categories = () => {
  const { ref: labelRef, isVisible: labelVisible } = useScrollAnimation(0.5);
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-40 px-6 snap-section">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={labelRef} 
          className={`mb-20 scroll-reveal-left ${labelVisible ? 'visible' : ''}`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 font-light">
            Build anything
          </span>
        </div>
        
        <div 
          ref={categoriesRef} 
          className={`flex flex-wrap gap-x-10 md:gap-x-20 gap-y-6 stagger-reveal ${categoriesVisible ? 'visible' : ''}`}
        >
          {categories.map((category, index) => (
            <span
              key={index}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-semibold tracking-[-0.02em] text-muted-foreground/20 hover:text-foreground/90 transition-colors duration-700 cursor-default"
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
