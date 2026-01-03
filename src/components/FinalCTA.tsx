import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdLql9wxVoGHg3zOdDFhA1pZpny6IGjp_230U4bbQtd0-QF-g/viewform";

const FinalCTA = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation(0.3);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-56 px-6 snap-section">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          ref={headingRef} 
          className={`scroll-reveal ${headingVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-[-0.03em] leading-[1] mb-14">
            Build something
            <br />
            <span className="text-gradient-peach">you're proud of.</span>
          </h2>
        </div>
        
        <div 
          ref={ctaRef} 
          className={`scroll-reveal ${ctaVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <Button asChild variant="hero" size="xl" className="hover-glow">
            <a href={REGISTRATION_URL} target="_blank" rel="noreferrer">
              Register Now
            </a>
          </Button>
        </div>

        <div 
          ref={linksRef} 
          className={`mt-24 flex items-center justify-center gap-10 text-sm text-muted-foreground/50 font-light tracking-wider scroll-reveal ${linksVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <a 
            href="#" 
            className="hover:text-foreground/80 transition-colors duration-500 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-foreground/50 after:transition-all after:duration-500 hover:after:w-full"
          >
            Discord
          </a>
          <span className="w-px h-3 bg-border/50" />
          <a 
            href="#" 
            className="hover:text-foreground/80 transition-colors duration-500 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-foreground/50 after:transition-all after:duration-500 hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
