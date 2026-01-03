import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-48 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <div className={`scroll-scale ${isVisible ? 'visible' : ''}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light leading-relaxed tracking-wide">
            Fast-paced but supportive.
            <br />
            <span className="text-foreground font-display font-medium">Ambitious but accessible.</span>
            <br />
            <span className="text-primary">First hackathon? Perfect.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
