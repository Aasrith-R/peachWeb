import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.4);

  return (
    <section className="py-56 px-6 snap-section">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div className={`scroll-reveal-scale ${isVisible ? 'visible' : ''}`}>
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide text-muted-foreground/70">
            Fast-paced but supportive.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-relaxed tracking-wide text-foreground/90 mt-2">
            Ambitious but accessible.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide mt-6">
            <span className="text-gradient-peach">First hackathon? Perfect.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
