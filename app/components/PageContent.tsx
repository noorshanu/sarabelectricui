import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import ApproachSection from "./sections/ApproachSection";
import TrustedBrandsSection from "./sections/TrustedBrandsSection";
import ServicesSection from "./sections/ServicesSection";
import DashboardSection from "./sections/DashboardSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechnologySection from "./sections/TechnologySection";
import AboutContactSection from "./sections/AboutContactSection";

export default function PageContent() {
  return (
    <div id="main-scroll-container" className="relative z-10 w-full">
      <HeroSection />
      <StatsSection />
      <ApproachSection />
      <TrustedBrandsSection />
      <ServicesSection />
      <DashboardSection />
      <ProjectsSection />
      <TechnologySection />
      <AboutContactSection />
    </div>
  );
}
