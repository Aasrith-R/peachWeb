import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SectionDivider = () => {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <div ref={ref} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`h-px bg-gradient-to-r from-transparent via-border to-transparent line-reveal ${isVisible ? 'visible' : ''}`} />
      </div>
    </div>
  );
};

export default SectionDivider;
