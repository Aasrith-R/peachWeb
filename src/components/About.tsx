import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-40 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`scroll-blur ${isVisible ? 'visible' : ''}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-[1.4] tracking-[-0.01em]">
            PeachState Hacks is a student-run, one-day hackathon where high schoolers team up, build real software, and leave with something they're proud of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
