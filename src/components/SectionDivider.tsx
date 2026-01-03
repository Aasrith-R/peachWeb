import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SectionDivider = () => {
  const { ref, isVisible } = useScrollAnimation(0.6);

  return (
    <div ref={ref} className="py-8 px-6">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div 
          className={`h-px bg-gradient-to-r from-transparent via-border/40 to-transparent line-reveal ${isVisible ? 'visible' : ''}`} 
        />
      </div>
    </div>
  );
};

export default SectionDivider;
