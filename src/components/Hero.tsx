import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 snap-section">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Badge */}
        <div className="animate-hero-fade mb-14">
          <span className="inline-block text-sm tracking-[0.25em] uppercase text-muted-foreground/70 font-light">
            January 10, 2026 — Cumming, Georgia
          </span>
        </div>

        {/* Main headline - soft entrance */}
        <h1 className="animate-hero-fade-delay-1 text-[clamp(3rem,11vw,8.5rem)] font-display font-semibold tracking-[-0.03em] leading-[0.9] mb-10">
          The <span className="text-gradient-peach">sweetest</span>
          <br />
          coding experience
          <br />
          in Georgia.
        </h1>

        {/* Subheadline - delayed, lighter motion */}
        <p className="animate-hero-fade-delay-2 text-lg md:text-xl text-muted-foreground/80 font-light tracking-wide max-w-lg mb-16 leading-relaxed">
          A free, student-led hackathon. One day. Real projects. No experience required.
        </p>

        {/* Single CTA */}
        <div className="animate-hero-fade-delay-3">
          <Button variant="hero" size="xl" className="hover-glow">
            Register Now
          </Button>
        </div>
      </div>

      {/* Scroll indicator - subtle */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-hero-fade-delay-3">
        <div className="flex flex-col items-center gap-3 text-muted-foreground/40">
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
