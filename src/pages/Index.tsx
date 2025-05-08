import {
  Header,
  HeroSection,
  KeyBenefits,
  ProblemsSection,
  BenefitsSection,
  MethodSection,
  ScienceSection,
  TargetAudienceSection,
  WhyChooseUsSection,
  HowItWorksSection,
  TestimonialsSection,
  ResultsSection,
  ExpertsSection,
  ContactSection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <KeyBenefits />
        <ProblemsSection />
        <BenefitsSection />
        <MethodSection />
        <ScienceSection />
        <TargetAudienceSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ResultsSection />
        <ExpertsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
