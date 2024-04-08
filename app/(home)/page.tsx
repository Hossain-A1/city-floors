import BestSeller from "@/components/BestSeller";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ImageHeroSection from "@/components/ImageHeroSection";
import Products from "@/components/Products";

const Homepage = () => {
  return (
    <main className='container sp'>
      <HeroSection />
      <ImageHeroSection/>
      <Features/>
      <BestSeller/>
      <Products />
    </main>
  );
};

export default Homepage;
