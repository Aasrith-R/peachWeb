import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Hero = () => {
  const emailId = useId();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const submitNewsletter = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterStatus("submitting");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("https://formspree.io/f/mzdzgjap", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      setNewsletterStatus(response.ok ? "success" : "error");
    } catch {
      setNewsletterStatus("error");
    }
  };

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
        <h1 className="text-[clamp(3rem,11vw,8.5rem)] font-display font-semibold tracking-[-0.03em] leading-[0.9] mb-10">
          <span className="hero-type-line hero-type-line-1">
            The <span className="text-gradient-peach">sweetest</span>
          </span>
          <span className="hero-type-line hero-type-line-2">coding experience</span>
          <span className="hero-type-line hero-type-line-3">in Georgia.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-hero-fade-delay-2 text-lg md:text-xl text-muted-foreground/80 font-light tracking-wide max-w-lg mb-16 leading-relaxed">
          A free, student-led hackathon. One day. Real projects. No experience required.
        </p>

        {/* CTAs */}
        <div className="animate-hero-fade-delay-3 flex flex-col sm:flex-row items-start gap-4">
          <Button asChild variant="hero" size="xl" className="hover-glow">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdLql9wxVoGHg3zOdDFhA1pZpny6IGjp_230U4bbQtd0-QF-g/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>
          </Button>
          <Dialog
            onOpenChange={(open) => {
              if (open) {
                setNewsletterEmail("");
                setNewsletterStatus("idle");
              }
            }}
          >
            <DialogTrigger asChild>
              <Button variant="outline" size="xl" className="text-muted-foreground hover:text-foreground">
                Join Newsletter
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join the newsletter</DialogTitle>
                <DialogDescription>Get updates about PeachState, registration, and event details.</DialogDescription>
              </DialogHeader>

              <form onSubmit={submitNewsletter} className="grid gap-4">
                <input type="hidden" name="_subject" value="PeachState newsletter signup" />

                <div className="grid gap-2">
                  <Label htmlFor={emailId}>Email</Label>
                  <Input
                    id={emailId}
                    type="email"
                    name="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    autoComplete="email"
                    disabled={newsletterStatus === "submitting"}
                  />
                </div>

                {newsletterStatus === "success" && (
                  <p className="text-sm text-muted-foreground">Submitted! You can close this window.</p>
                )}
                {newsletterStatus === "error" && (
                  <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
                )}

                <DialogFooter className="gap-2">
                  <DialogClose asChild>
                    <Button type="button" variant="ghost">
                      Close
                    </Button>
                  </DialogClose>
                  <Button type="submit" variant="hero" disabled={newsletterStatus === "submitting"}>
                    {newsletterStatus === "submitting" ? "Submitting..." : "Join Newsletter"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

    </section>
  );
};

export default Hero;
