const About = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
          About
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
          What is PeachState Hacks?
        </h2>
        
        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          A student-run, one-day hackathon where you team up, build real software, and leave with something you're proud of.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1", label: "Day" },
            { value: "100+", label: "Students" },
            { value: "4", label: "Categories" },
            { value: "∞", label: "Possibilities" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-peach mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
