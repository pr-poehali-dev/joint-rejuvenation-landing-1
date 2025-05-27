import { SectionHeader } from "./contact/SectionHeader";
import { BenefitsCard } from "./contact/BenefitsCard";
import { BusinessOffer } from "./contact/BusinessOffer";
import { ContactFormCard } from "./contact/ContactFormCard";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50 relative">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="opacity-10"
        >
          <path
            d="M0,0 L100,0 L100,20 C80,40 50,30 20,50 L0,70 Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container max-w-6xl relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <BenefitsCard />
            <BusinessOffer />
          </div>

          <div className="lg:col-span-2">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};
