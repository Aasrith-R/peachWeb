import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EventDetails = () => {
  const { ref: labelRef, isVisible: labelVisible } = useScrollAnimation(0.5);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.3);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-40 px-6 snap-section">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={labelRef} 
          className={`mb-20 scroll-reveal-left ${labelVisible ? 'visible' : ''}`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 font-light">
            Details
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16">
          <div 
            ref={leftRef} 
            className={`space-y-12 scroll-reveal-left ${leftVisible ? 'visible' : ''}`}
          >
            <div className="group">
              <div className="text-[10px] text-muted-foreground/50 mb-4 tracking-[0.2em] uppercase">Date</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/90">January 10, 2026</div>
            </div>
            <div className="group">
              <div className="text-[10px] text-muted-foreground/50 mb-4 tracking-[0.2em] uppercase">Time</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/90">9:30 AM – 6:00 PM</div>
            </div>
            <div className="group">
              <div className="text-[10px] text-muted-foreground/50 mb-4 tracking-[0.2em] uppercase">Location</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/90">Forsyth Central High School</div>
              <div className="text-muted-foreground/60 mt-2 font-light text-sm tracking-wide">Cumming, GA</div>
            </div>
          </div>
          
          <div 
            ref={rightRef} 
            className={`space-y-12 scroll-reveal-right ${rightVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="group">
              <div className="text-[10px] text-muted-foreground/50 mb-4 tracking-[0.2em] uppercase">Cost</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/90">Free</div>
            </div>
            <div className="group">
              <div className="text-[10px] text-muted-foreground/50 mb-4 tracking-[0.2em] uppercase">Teams</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/90">1–4 students</div>
            </div>
            <div className="group">
              <div className="text-[10px] text-muted-foreground/50 mb-4 tracking-[0.2em] uppercase">Includes</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/90">Meals, snacks, prizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
