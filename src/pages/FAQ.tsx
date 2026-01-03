import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "Who can participate?",
    answer: "PeachState Hacks is open to all high school students. Whether you're a freshman or a senior, if you're interested in technology and building things, you're welcome here."
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all! Many participants are beginners. We'll have workshops and mentors to help you learn. You can also contribute through design, project management, or coming up with great ideas."
  },
  {
    question: "How much does it cost?",
    answer: "PeachState Hacks is completely free to attend. We provide meals, snacks, and all the resources you need."
  },
  {
    question: "Do I need a team?",
    answer: "You can register solo or with a team of up to 4 people. If you don't have a team, we'll help you find one at the event."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any hardware you want to use. We'll provide everything else — food, drinks, WiFi, and workspace."
  },
  {
    question: "What can I build?",
    answer: "Anything! Choose from our categories: AI, Web, Mobile, or Design. Build a tool, game, app, or creative project. The only limit is your imagination."
  },
  {
    question: "How does judging work?",
    answer: "Projects are judged on creativity, technical execution, design, and impact. You'll demo your project to judges and explain what you built and why."
  },
  {
    question: "Are there prizes?",
    answer: "Yes! We have prizes for top projects in each category, plus special awards. Details will be announced closer to the event."
  }
];

const FAQ = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div 
            ref={headerRef} 
            className={`mb-20 scroll-reveal ${headerVisible ? 'visible' : ''}`}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 font-light block mb-6">
              Questions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-[-0.03em] leading-[1]">
              Frequently Asked
            </h1>
          </div>
          
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

const FAQItem = ({ faq, index }: { faq: { question: string; answer: string }; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="border-t border-border/30 pt-8">
        <h3 className="text-xl md:text-2xl font-display font-medium tracking-[-0.01em] text-foreground/90 mb-4">
          {faq.question}
        </h3>
        <p className="text-muted-foreground/70 font-light leading-relaxed tracking-wide">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
