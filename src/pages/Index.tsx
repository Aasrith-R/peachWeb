import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import WhyAttend from "@/components/WhyAttend";
import EventDetails from "@/components/EventDetails";
import Experience from "@/components/Experience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <SectionDivider />
      
      <section id="about">
        <About />
      </section>
      
      <SectionDivider />
      
      <section id="categories">
        <Categories />
      </section>
      
      <SectionDivider />
      
      <WhyAttend />
      
      <SectionDivider />
      
      <section id="details">
        <EventDetails />
      </section>
      
      <SectionDivider />
      
      <Experience />
      
      <SectionDivider />
      
      <section id="register">
        <FinalCTA />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
