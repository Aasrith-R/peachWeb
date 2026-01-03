import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-40 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-[-0.02em] leading-[1.1] mb-12">
          Build something
          <br />
          you're proud of.
        </h2>
        
        <Button variant="hero" size="xl">
          Register Now
        </Button>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground font-light tracking-wide">
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Discord
          </a>
          <span className="w-px h-4 bg-border" />
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
