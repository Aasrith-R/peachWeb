import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const schedule = [
  { time: "9:30 – 10:00 AM", title: "Check-In & Arrival", description: "Teams arrive, check in, set up.", highlight: false },
  { time: "10:00 – 10:20 AM", title: "Opening Ceremony", description: "Welcome, rules, judging criteria, schedule overview.", highlight: false },
  { time: "10:20 AM", title: "Hacking Begins", description: null, highlight: true, emoji: "🚀" },
  { time: "11:00 – 11:30 AM", title: "Technical Workshop", description: "Focused, hands-on session to unblock teams early.", highlight: false },
  { time: "12:30 – 1:00 PM", title: "Lunch", description: null, highlight: false, emoji: "🍽️" },
  { time: "2:00 – 2:30 PM", title: "Workshop / Talk", description: "Higher-level workshop (ideas, UX, pitching, or problem-solving).", highlight: false },
  { time: "3:30 PM", title: "Hacking Ends / Code Freeze", description: "All submissions due.", highlight: true, emoji: "⛔" },
  { time: "3:30 – 5:15 PM", title: "Judging & Demos", description: "Teams present to judges.", highlight: false },
  { time: "5:15 – 6:00 PM", title: "Awards & Closing Ceremony", description: "Winners announced, closing remarks.", highlight: true, emoji: "🏆" },
];

const Timeline = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={headerRef} 
            className={`mb-20 scroll-reveal ${headerVisible ? 'visible' : ''}`}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 font-light block mb-6">
              January 10, 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-[-0.03em] leading-[1]">
              Event Timeline
            </h1>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-border/30" />
            
            <div className="space-y-0">
              {schedule.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

const TimelineItem = ({ 
  event, 
  index 
}: { 
  event: { time: string; title: string; description: string | null; highlight: boolean; emoji?: string }; 
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="relative pl-8 md:pl-0 py-8 md:grid md:grid-cols-[8rem_1fr] md:gap-8">
        {/* Time */}
        <div className="text-sm text-muted-foreground/60 font-light tracking-wide mb-2 md:mb-0 md:text-right md:pr-8">
          {event.time}
        </div>
        
        {/* Dot */}
        <div className={`absolute left-[-4px] md:left-[7.5rem] top-9 md:top-9 w-2 h-2 rounded-full ${event.highlight ? 'bg-primary' : 'bg-muted-foreground/40'}`} />
        
        {/* Content */}
        <div className="md:pl-8">
          <h3 className={`text-xl md:text-2xl font-display font-medium tracking-[-0.01em] ${event.highlight ? 'text-foreground' : 'text-foreground/80'}`}>
            {event.title} {event.emoji && <span className="ml-1">{event.emoji}</span>}
          </h3>
          {event.description && (
            <p className="text-muted-foreground/60 font-light tracking-wide mt-2">
              {event.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
