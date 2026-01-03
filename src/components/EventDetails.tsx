import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EventDetails = () => {
  const { ref: labelRef, isVisible: labelVisible } = useScrollAnimation(0.3);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.2);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={labelRef} className={`mb-16 scroll-fade-left ${labelVisible ? 'visible' : ''}`}>
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
            Details
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
          <div ref={leftRef} className={`space-y-10 scroll-fade-left ${leftVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="group">
              <div className="text-xs text-muted-foreground mb-3 tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-primary">Date</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em]">January 10, 2026</div>
            </div>
            <div className="group">
              <div className="text-xs text-muted-foreground mb-3 tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-primary">Time</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em]">9:30 AM – 6:00 PM</div>
            </div>
            <div className="group">
              <div className="text-xs text-muted-foreground mb-3 tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-primary">Location</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em]">Forsyth Central High School</div>
              <div className="text-muted-foreground mt-2 font-light">Cumming, GA</div>
            </div>
          </div>
          
          <div ref={rightRef} className={`space-y-10 scroll-fade-right ${rightVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="group">
              <div className="text-xs text-muted-foreground mb-3 tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-primary">Cost</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em]">Free</div>
            </div>
            <div className="group">
              <div className="text-xs text-muted-foreground mb-3 tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-primary">Teams</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em]">1–4 students</div>
            </div>
            <div className="group">
              <div className="text-xs text-muted-foreground mb-3 tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-primary">Includes</div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em]">Meals, snacks, prizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
