import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-up mb-12">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
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

        {/* Subheadline - lighter weight, wider spacing */}
        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-xl mb-16 leading-relaxed">
          A free, student-led hackathon. One day. Real projects. No experience required.
        </p>

        {/* Single CTA */}
        <div className="animate-fade-up-delay-3">
          <Button variant="hero" size="xl">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
