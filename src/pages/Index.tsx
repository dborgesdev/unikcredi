import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesSection from "@/components/ServicesSection";
import InstagramSection from "@/components/InstagramSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <InstagramSection />
        <LocationSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
