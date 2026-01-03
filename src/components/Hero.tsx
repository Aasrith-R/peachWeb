import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-float" />
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-primary/40 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-up mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            January 10, 2026 • Cumming, GA
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          The <span className="text-gradient-peach">Sweetest</span> Coding
          <br />
          Experience in Georgia.
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          A free, student-led hackathon where high schoolers build real projects in one day.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl">
            Register Now
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
