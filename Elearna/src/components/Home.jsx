import HeroSection from "./HeroSection";
import BrandsSection from "./BrandsSection";
import CategoriesSection from "./CategoriesSection";
import PromoSection from "./PromoSection";
import CoursesSection from "./CoursesSection";
import PersonalizedSection from "./PersonalizedSection";
import TestimonialsSection from "./TestimonialsSection";
import ProgramsSection from "./ProgramsSection";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar/>
      <HeroSection />
      <BrandsSection />
      <CategoriesSection />
      <PromoSection />
      <CoursesSection />
      <PersonalizedSection />
      <TestimonialsSection />
      <ProgramsSection />
      <BenefitsSection />
      <CTASection />
      <Footer/>
    </main>
    
  );
}
