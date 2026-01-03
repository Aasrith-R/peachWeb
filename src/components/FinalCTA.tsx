import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-48 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-[-0.03em] leading-[0.95] mb-12">
            Build something
            <br />
            <span className="text-gradient-peach">you're proud of.</span>
          </h2>
        </div>
        
        <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <Button variant="hero" size="xl" className="group">
            <span>Register Now</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        <div className={`mt-20 flex items-center justify-center gap-8 text-sm text-muted-foreground font-light tracking-wide scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <a href="#" className="hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
            Discord
          </a>
          <span className="w-px h-4 bg-border" />
          <a href="#" className="hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
