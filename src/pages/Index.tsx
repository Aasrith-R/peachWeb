import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <SectionDivider />
      
      <section id="details">
        <EventDetails />
      </section>
      
      <SectionDivider />
      
      <section id="register">
        <FinalCTA />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
