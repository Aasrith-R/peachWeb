import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  "Learn by building, not watching.",
  "Collaborate with driven peers.",
  "Ship a real project in one day.",
  "Compete — and have fun doing it.",
];

const WhyAttend = () => {
  const { ref: labelRef, isVisible: labelVisible } = useScrollAnimation(0.3);
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={labelRef} className={`mb-16 scroll-fade-left ${labelVisible ? 'visible' : ''}`}>
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
            Why attend
          </span>
        </div>
        
        <div ref={reasonsRef} className={`space-y-8 stagger-children ${reasonsVisible ? 'visible' : ''}`}>
          {reasons.map((reason, index) => (
            <p
              key={index}
              className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/80 hover:text-foreground transition-colors duration-500"
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
