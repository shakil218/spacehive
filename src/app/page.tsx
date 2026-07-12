import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedSpaces from "@/components/home/FeaturedSpaces";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
// import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedSpaces />
      <HowItWorks />
      <WhyChooseUs />
      {/* <StatsSection /> */}
      <Testimonials />
      <FAQSection />
      <NewsletterCTA />
    </>
  );
}