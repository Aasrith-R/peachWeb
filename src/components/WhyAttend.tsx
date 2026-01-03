import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  "Learn by building, not watching.",
  "Collaborate with driven peers.",
  "Ship a real project in one day.",
  "Compete — and have fun doing it.",
];

const WhyAttend = () => {
  const { ref: labelRef, isVisible: labelVisible } = useScrollAnimation(0.5);
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-40 px-6 snap-section">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={labelRef} 
          className={`mb-20 scroll-reveal-left ${labelVisible ? 'visible' : ''}`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 font-light">
            Why attend
          </span>
        </div>
        
        <div 
          ref={reasonsRef} 
          className={`space-y-10 stagger-reveal ${reasonsVisible ? 'visible' : ''}`}
        >
          {reasons.map((reason, index) => (
            <p
              key={index}
              className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/70 hover:text-foreground transition-colors duration-600"
            >
              {reason}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
