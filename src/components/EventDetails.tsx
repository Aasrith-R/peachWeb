const EventDetails = () => {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
            Details
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
          <div className="space-y-8">
            <div>
              <div className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">Date</div>
              <div className="text-2xl font-display font-medium">January 10, 2026</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">Time</div>
              <div className="text-2xl font-display font-medium">9:30 AM – 6:00 PM</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">Location</div>
              <div className="text-2xl font-display font-medium">Forsyth Central High School</div>
              <div className="text-muted-foreground mt-1">Cumming, GA</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">Cost</div>
              <div className="text-2xl font-display font-medium">Free</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">Teams</div>
              <div className="text-2xl font-display font-medium">1–4 students</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">Includes</div>
              <div className="text-2xl font-display font-medium">Meals, snacks, prizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
