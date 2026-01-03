import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-up mb-12 overflow-hidden">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
            January 10, 2026 — Cumming, Georgia
          </span>
        </div>

        {/* Main headline - oversized, tight leading */}
        <h1 className="animate-fade-up-delay-1 text-[clamp(3rem,12vw,9rem)] font-display font-semibold tracking-[-0.03em] leading-[0.9] mb-8">
          The <span className="text-gradient-peach">sweetest</span>
          <br />
          coding experience
          <br />
          in Georgia.
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-xl mb-16 leading-relaxed">
          A free, student-led hackathon. One day. Real projects. No experience required.
        </p>

        {/* Single CTA */}
        <div className="animate-fade-up-delay-3">
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
