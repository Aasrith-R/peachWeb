import { Calendar, Clock, MapPin, DollarSign, Users, GraduationCap, UtensilsCrossed, Award } from "lucide-react";

const details = [
  { icon: Calendar, label: "Date", value: "January 10, 2026" },
  { icon: Clock, label: "Time", value: "9:30 AM – 6:00 PM" },
  { icon: MapPin, label: "Location", value: "Forsyth Central High School" },
  { icon: DollarSign, label: "Cost", value: "Free entry" },
  { icon: Users, label: "Team Size", value: "1–4 students" },
  { icon: GraduationCap, label: "Eligibility", value: "High school only" },
  { icon: UtensilsCrossed, label: "Food", value: "Meals & snacks included" },
  { icon: Award, label: "Prizes", value: "Prizes for winners" },
];

const EventDetails = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Details
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Event Info
          </h2>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {details.map((detail, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <detail.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                {detail.label}
              </div>
              <div className="font-semibold text-sm leading-tight">
                {detail.value}
              </div>
            </div>
          ))}
        </div>

        {/* Location highlight */}
        <div className="mt-8 p-6 rounded-2xl bg-card border border-border text-center">
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">Forsyth Central High School</span>
            <span className="mx-2">•</span>
            520 Tribble Gap Rd, Cumming, GA 30040
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
