import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSections from "@/components/HeroSections";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingEvents from "@/components/UpcomingEvents";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSections/>
    <FeaturedSection/>
    <WhyChooseUsSection/>
    <TestimonialCards/>
    <UpcomingEvents/>
    <Instructors/>
    <Footer/>
   </main>
  );
}
