import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main text */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Build something
          <br />
          <span className="text-gradient-peach">you're proud of.</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
          January 10, 2026. One day to learn, create, and compete.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl">
            Register Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Secondary links */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors duration-300">
            Join Discord
          </a>
          <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
          <a href="#" className="hover:text-primary transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
