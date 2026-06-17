import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import ServicesSection from "./sections/ServicesSection";
import DashboardSection from "./sections/DashboardSection";
import ProjectsSection from "./sections/ProjectsSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ContactCTASection from "./sections/ContactCTASection";

export default function PageContent() {
  return (
    <div id="main-scroll-container" className="relative w-full">
      <HeroSection />
      <StatsSection />
      <WhoWeAreSection />
      <ServicesSection />
      <DashboardSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <ContactCTASection />
    </div>
  );
}
