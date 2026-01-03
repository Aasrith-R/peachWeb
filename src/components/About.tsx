import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-48 px-6 snap-section">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`scroll-reveal-soft ${isVisible ? 'visible' : ''}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-[1.5] tracking-[-0.01em] text-foreground/90">
            PeachState Hacks is a student-run, one-day hackathon where high schoolers team up, build real software, and leave with something they're proud of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
