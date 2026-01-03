const reasons = [
  "Learn by building, not watching.",
  "Collaborate with driven peers.",
  "Ship a real project in one day.",
  "Compete — and have fun doing it.",
];

const WhyAttend = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
            Why attend
          </span>
        </div>
        
        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <p
              key={index}
              className="text-2xl md:text-3xl font-display font-medium tracking-[-0.01em] text-foreground/80"
            >
              {reason}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
